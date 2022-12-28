import { useQuery } from "@apollo/client";
import MODAL_QUERY from "../../lib/queries/modalQuery";

interface IProps {
  mission_id: string;
}

const Modal = (props: IProps) => {
  console.log("displayModal with mission_id: " + props.mission_id);

  const { loading, error, data } = useQuery(MODAL_QUERY, {
    variables: { mission_id: props.mission_id },
  });
  if (error) return <>{"An error occured fetching data"}</>;
  if (loading) return <>{"Loading"}</>;
  console.log(data);

  return (
    <div className="modal">
      <div className="modal-content">

      </div>
    </div>
  );
}

export default Modal;