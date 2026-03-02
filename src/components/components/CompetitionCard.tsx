import { useNavigate } from "react-router-dom";
import type { Competition } from "../competitions/types/competitionTypes";
import "../../styles/compitions/competitionCard.css";

const CompetitionCard = ({ comp }: { comp: Competition }) => {
  const navigate = useNavigate();

  return (
    <div className="competition-card-scope">
      <div className="card">
        <img src={comp.bannerUrl} alt="" />
        <div className="card-body">
          <h3>{comp.title}</h3>
          <p>{comp.description}</p>
          <button onClick={() => navigate(`/competition/${comp.id}`)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;