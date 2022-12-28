import { gql } from "@apollo/client";

const MODAL_QUERY = gql`
  query modalQuery($mission_id: ID!) {
    launch(id: $mission_id) {
      mission_name
      launch_success
      launch_date_local
      launch_site {
        site_name
      }
      details
      links {
        mission_patch
      }
    }
  }
`;

export default MODAL_QUERY;
