// import { useEffect, useState } from "react";
// import "../../../styles/mocktest.css";

// import { fetchMockTestsByExam }
//   from "../api/mockApi";

// import { useRazorpay }
//   from "../../hooks/useRazorpay";
// import { useNavigate } from "react-router-dom";

// export default function NeetFullList() {
//   const navigate = useNavigate();
//   const [tests, setTests] = useState<any[]>([]);
//   const examType = "NEET_FULL";

//   async function load() {
//     const data = await fetchMockTestsByExam(examType);
//     setTests(data);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   const { startPayment } = useRazorpay(load);

//   return (
//     <div className="container">

//       <h2>NEET Full Mock Tests</h2>

//       <div className="mock-grid">

//         {/* FREE TESTS */}
//         {tests.map(t => (
//           <div key={t.id} className="mock-card">
//             <h3>{t.title}</h3>
//             <p>Questions: {t.totalQuestions}</p>
//             <p>Duration: {t.duration}</p>

//             <button onClick={() => navigate("/mock-tests/list/NEET_FULL")}>
//             Start Test →
//           </button>
//           </div>
//         ))}

//         {/* PREMIUM LOCK */}
//         {tests.length <= 2 && (
//           <div className="mock-card premium-lock">
//             <div className="lock">🔒</div>
//             <h3>30 Premium Tests</h3>
//             <p>Unlock full NEET series</p>

//             <button onClick={() => startPayment("NEET_FULL")}>
//               Unlock @ ₹99
//             </button>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }
