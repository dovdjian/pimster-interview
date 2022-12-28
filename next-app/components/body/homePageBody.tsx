interface ILaunchCard {
  mission_name: string;
  launch_date_local: Date;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch: string;
  };
}

function convertDate(arg: Date) {

  const date = new Date(arg);
  const formattedDate = date.toLocaleDateString();

  return formattedDate;
}

const HomePageBody = (data: any) => {

  const launchCards: ILaunchCard[] = data.data.launchesPast as ILaunchCard[];

  return (
    <div className="home-page-body">
      <div className="launch-cards">
        {launchCards.map((launchCard: ILaunchCard) => (
          <div className="launch-card" key={launchCard.mission_name}>
            {launchCard.links.mission_patch ? (
              <img src={launchCard.links.mission_patch} alt={launchCard.mission_name} />
            ) : null}
            <p>{convertDate(launchCard.launch_date_local)}</p>
            <p>{launchCard.rocket.rocket_name}</p>
            <h2>{launchCard.mission_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageBody;
