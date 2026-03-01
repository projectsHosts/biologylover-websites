import "../../styles/compitions/competitionCard.css"


export default function QuestionCard({q,onSelect}:any){

 return (
  <div className="bg-slate-800 p-4 rounded-lg mb-4">
    <p className="mb-2">{q.questionText}</p>

    {["A","B","C","D"].map(opt=>(
      <button
       key={opt}
       onClick={()=>onSelect(q.id,opt)}
       className="block w-full text-left bg-slate-700 p-2 rounded mb-2 hover:bg-slate-600">
        {q["option"+opt]}
      </button>
    ))}
  </div>
 )
}