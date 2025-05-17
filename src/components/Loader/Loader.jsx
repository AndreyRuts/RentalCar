import ClipLoader from "react-spinners/ClipLoader";

function Loader({ loading }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 320 }}>
      <ClipLoader color="#36d7b7" loading={loading} size={200} />
    </div>
  );
}

export default Loader;
