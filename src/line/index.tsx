import Pc from "./Pc";
import Mobile from "./Mobile";
import "../assets/style/line_momentum_stay.css";

export default function Line() {
  return (
    <div class="frame">
      <div id="line-pc" class="pc-view">
        <Pc />
      </div>
      <div class="mobile-view">
        <Mobile />
      </div>
    </div>
  );
}
