// MockTestAttempt.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/mocktest.css";

import {
  startAttempt,
  fetchAttemptQuestion,
  saveAttemptAnswer,
  submitAttempt
} from "../api/mockApi";

export default function MockTestAttempt(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [attemptId,setAttemptId] = useState<number>();
  const [index,setIndex] = useState(0);
  const [question,setQuestion] = useState<any>(null);
  const [selected,setSelected] = useState<string|null>(null);
  const [timeLeft,setTimeLeft] = useState(180*60);

  // ===== start attempt =====

  useEffect(()=>{
    if(!id) return;

    startAttempt(Number(id)).then(aid=>{
      setAttemptId(aid);
    });
  },[id]);

  // ===== load question =====

  useEffect(()=>{
    if(!attemptId) return;

    fetchAttemptQuestion(attemptId,index)
      .then(setQuestion)
      .catch(()=>submit()); // no more questions
  },[attemptId,index]);

  useEffect(()=>{
  setSelected(null);
},[question]);


  // ===== select answer =====

  function select(opt:string){
    if(!attemptId || !question) return;

    setSelected(opt);

    saveAttemptAnswer(attemptId,{
      questionId: question.id,
      selectedOption: opt
    });
  }

  // ===== submit =====

  async function submit(){
    if(!attemptId) return;

    const result = await submitAttempt(attemptId);

    navigate("/mock-result",{ state: result });
  }

  // ===== timer =====

  useEffect(()=>{
    const t = setInterval(()=>{
      setTimeLeft(s=>{
        if(s<=1){
          clearInterval(t);
          submit();
          return 0;
        }
        return s-1;
      });
    },1000);

    return ()=>clearInterval(t);
  },[attemptId]);

  if(!question) return <div className="container">Loading...</div>;

  const min = Math.floor(timeLeft/60);
  const sec = timeLeft%60;

  return (
    <div className="container">

      <div className="mock-test-header">
        <h2>Mock Test</h2>
        <div>Time Left: {min}:{sec.toString().padStart(2,"0")}</div>
      </div>

      <h3>Q{index+1}. {question.questionText}</h3>

      {["A","B","C","D"].map(o=>(
        <button
          key={o}
          className={
            selected===o
              ? "mock-option mock-selected"
              : "mock-option"
          }
          onClick={()=>select(o)}
        >
          {o}: {question["option"+o]}
        </button>
      ))}

      <div className="mock-nav">
        <button
          disabled={index===0}
          onClick={()=>setIndex(i=>i-1)}
        >
          Prev
        </button>

        <button onClick={()=>setIndex(i=>i+1)}>
          Next
        </button>

        <button onClick={submit}>
          Submit Test
        </button>
      </div>

    </div>
  );
}
