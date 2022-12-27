
const HomePageBody = (data: any) => {
  return (
    <div className="home-page-body">
      <h1>Space X Launches Gallery</h1>
      <p>A collection of all Space X launches to explore</p>
      {JSON.stringify(data)}
    </div>
  );
};

export default HomePageBody;
