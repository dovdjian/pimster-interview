import { gql } from "@apollo/client";

const LAUNCH_CARD_QUERY = gql`
  query launchCardQuery {
    launchesPast(limit: 8) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
      links {
        mission_patch
      }
    }
  }
`;

export default LAUNCH_CARD_QUERY;
