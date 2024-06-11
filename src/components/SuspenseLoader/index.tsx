import SuspenseLoaderIcon from "../icons/suspenseLoaderIcon";

const SuspenseLoader = () => {
  return (
    <section style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255 255 255 / 50%)",
        }}
      >
        <SuspenseLoaderIcon />
      </div>
    </section>
  );
};

export default SuspenseLoader;
