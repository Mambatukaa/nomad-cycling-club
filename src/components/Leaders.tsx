import LeaderCard from "./common/LeaderCard";
import { LEADERS } from "../contants";

const Leaders = () => {
  return (
    <div className="bg-gray-300 py-10">
      <div className="container mx-auto flex-row">
        <div>
          <h1 className="text-5xl font-bold text-blue-primary">
            Nomads Leadership
          </h1>
          <p className="mt-4 w-[485px] text-lg text-black">
            Our club is dedicated to providing a welcoming and supportive
            environment for all cyclists, regardless of their skill level or
            backgroud.
          </p>
        </div>

        {LEADERS.map((leader) => (
          <LeaderCard key={leader.id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leaders;
