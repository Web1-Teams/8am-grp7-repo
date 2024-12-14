import Background from "../components/Background";
import Card from "../components/Card";
import img4 from "../img/pro.jpg";

const Home = () => {
  return (
    <div>
      <Background />
      <Card
        imgsrc={img4}
        title="Programming"
        description=" Challenge your programming knowledge"
      />
    </div>
  );
};

export default Home;
