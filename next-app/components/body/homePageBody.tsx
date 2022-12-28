import { useState } from "react";
import Modal from "./modal";

interface ILaunchCard {
  id: string;
  mission_name: string;
  launch_date_local: Date;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch: string;
  };
}

interface IModal {
  mission_name: string;
  launch_date_local: Date;
  success: boolean;
  launch_site_name: string;
  mission_description: string;
}

function convertDate(arg: Date) {

  const date = new Date(arg);
  const formattedDate = date.toLocaleDateString();

  return formattedDate;
}

interface IProps {
  data: any;
}

const HomePageBody = (props: IProps) => {

  const launchCards: ILaunchCard[] = props.data.launchesPast as ILaunchCard[];
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="home-page-body">
      <div className="launch-cards">
        {launchCards.map((launchCard: ILaunchCard) => (
          <div className="launch-card" key={launchCard.id} onClick={() => setIsDisplayed(true)} >
            {launchCard.links.mission_patch ? (
              <img src={launchCard.links.mission_patch} alt={launchCard.mission_name} />
            ) : null}
            <p>{convertDate(launchCard.launch_date_local)}</p>
            <p>{launchCard.rocket.rocket_name}</p>
            <h2>{launchCard.mission_name}</h2>
            {isDisplayed && <Modal mission_id={launchCard.id} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageBody;
