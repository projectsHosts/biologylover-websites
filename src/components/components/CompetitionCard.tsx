import { useNavigate } from "react-router-dom";
import type { Competition } from "../competitions/types/competitionTypes";
import "../../styles/compitions/competitionCard.css";

const CompetitionCard = ({ comp }: { comp: Competition }) => {
  const navigate = useNavigate();

  return (
    <div className="cc-scope">
      <div className="cc-card">
        <img src={comp.bannerUrl} alt="" />
        <div className="cc-card-body">
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