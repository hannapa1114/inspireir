import Pc from "./Pc";
import Mobile from "./Mobile";
import "../assets/style/line_momentum_stay.css";

export default function Stay() {
  return (
    <div class="frame">
      <div id="stay-pc" class="pc-view">
        <Pc />
      </div>
      <div class="mobile-view">
        <Mobile />
      </div>
    </div>
  );
}
