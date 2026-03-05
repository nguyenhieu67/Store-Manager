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
      {trendUp && <p className="text-sm text-(--success)">{trendUp}</p>}
      {trendDown && <p className="text-sm text-(--danger)">{trendDown}</p>}
    </div>
  );
}

export default StatsCard;
