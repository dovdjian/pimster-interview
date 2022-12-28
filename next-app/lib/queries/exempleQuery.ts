import { gql } from "@apollo/client";

const EXEMPLE_QUERY = gql`
  query exempleQuery {
    launchesPast {
      mission_name
    }
  }
`;

export default EXEMPLE_QUERY;
