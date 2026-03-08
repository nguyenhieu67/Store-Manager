<<<<<<< HEAD
import { TrendingDownIcon, TrendingUpIcon } from "../Icons";

=======
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
function StatsCard({
  title,
  value,
  borderLeft = "",
  trendUp,
  trendDown,
  className,
}) {
  return (
    <div
      className={`rounded-xl bg-white p-5 shadow-[0_4px_6px_rgba(0,0,0,0.02)] ${borderLeft && `border-l-[5px] border-solid ${borderLeft}`}`}
    >
      <h3 className="text-sm text-[#7f8c8d] uppercase">{title}</h3>
      <p className={`text-[28px] font-bold text-(--dark-color) ${className}`}>
        {value}
      </p>
<<<<<<< HEAD
      {trendUp && (
        <p className="flex items-center gap-1 text-sm text-(--success)">
          <TrendingUpIcon color="#2ecc71" /> {trendUp}
        </p>
      )}
      {trendDown && (
        <p className="flex items-center gap-1 text-sm text-(--danger)">
          <TrendingDownIcon color="#e74c3c" /> {trendDown}
        </p>
      )}
=======
      {trendUp && <p className="text-sm text-(--success)">{trendUp}</p>}
      {trendDown && <p className="text-sm text-(--danger)">{trendDown}</p>}
>>>>>>> 8e3a0ff56c6e239c25a393ccb40d11502ddc2bd7
    </div>
  );
}

export default StatsCard;
