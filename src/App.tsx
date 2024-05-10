// import image from "./assets/images/bmw.jpg";

import Card from "./components/Card/Card";
import Layout from "./components/Layout/Layout";
import { info } from "./data/info";

function App() {
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 mt-5">
        {info.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.img}
              price={item.price}
              action={() => alert(item.title)}
              btnText={item.btnText}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default App;
