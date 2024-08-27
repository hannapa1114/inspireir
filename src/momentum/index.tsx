import Pc from "./Pc";
import Mobile from "./Mobile";
import "../assets/style/line_momentum_stay.css";

export default function Momentum() {
  return (
    <div class="frame">
      <div id="momentum-pc" class="pc-view">
        <Pc />
      </div>
      <div class="mobile-view">
        <Mobile />
      </div>
    </div>
  );
}
