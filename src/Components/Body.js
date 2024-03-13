import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <div className="container">
      <div className="content">
        {/* Your scrollable content here */}
        {/* Example content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam
          vehicula, efficitur purus eu, cursus tortor. Phasellus ac aliquam
          urna. Sed feugiat sapien eget mauris dapibus, ut blandit eros pretium.
          Sed nec suscipit metus. Integer sit amet nisi at eros ullamcorper
          interdum. Duis in velit in metus commodo volutpat. Nam varius libero
          eu suscipit consequat.
        </p>
        <p>
          Fusce volutpat magna vitae magna tempor, sit amet tempor velit
          posuere. Proin auctor purus nec odio pellentesque blandit. Suspendisse
          ornare augue nec lorem eleifend, eget auctor velit rutrum. Nulla quis
          dapibus neque. Integer tincidunt nisi sit amet purus rhoncus, eu
          rutrum orci eleifend. Cras malesuada felis nec arcu tincidunt tempus.
          Suspendisse potenti. Donec congue tortor vel velit condimentum, nec
          pulvinar metus ullamcorper.
        </p>
        <p>
          Donec aliquam metus eget lacus malesuada vestibulum. Donec in vehicula
          nisi, vel facilisis leo. Fusce in ipsum non purus rhoncus tincidunt eu
          a elit. Ut malesuada nibh vitae magna volutpat vestibulum. Nulla
          ultricies, dui ut fermentum varius, libero metus fringilla ligula, at
          sodales lorem nulla vel eros. Sed eu bibendum ipsum. Phasellus
          malesuada, urna eu dictum condimentum, sem ipsum sodales justo, at
          volutpat ipsum libero quis odio. Nullam tempus arcu non lorem
          venenatis lobortis.
        </p>
        {/* End of example content */}
      </div>
    </div>
  );
};

export default Body;
