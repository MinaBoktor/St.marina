import React from "react";


const Hero = (props) => {
    const images = ['Img1', 'Img2', 'Img3', 'Img4'];
    const [count, setCount] = React.useState(0);

    const [img, setImage] = React.useState(props.bi[3][images[3]])
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCount(count+1)
        setImage(props.bi[count%4][images[count%4]])
      }, 5000);
      return () => clearInterval(interval);
    }, [img])
    return (
    <header style={{backgroundImage:`url(${img})`, height:'650px', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",}}>
      {props.children}
    </header>
  );
}

export default Hero;