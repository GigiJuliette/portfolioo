import { useEffect } from "react";
import "./Home.css";
import { Background } from "../../components/LiquidEther/Background";
import TextPressure from "../../components/TextPressure/TextPressure";
import useElementWidth from "../../hook/useElementWidth";

function Home() {
  const { ref, width } = useElementWidth();

  useEffect(() => {
    console.log("TextPressure width:", width);
  }, [width]);

  return (
    <>
      <Background />
      <div
        style={{
          position: "absolute",
          width: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <TextPressure
          elementRef={ref}
          text="Hello world !"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>
    </>
  );
}
export default Home;
