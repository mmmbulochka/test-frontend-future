import style from "./index.module.css";

function Loader() {
  return (
    <img className={style.img} height={60} width={60} src={"/loading.png"} />
  );
}

export default Loader;
