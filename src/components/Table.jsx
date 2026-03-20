import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

function Table({
  title,
  custom,
  options,
  tableTitles,
  tableDatas,
  productData,
  clientData,
  actions,
  loading,
  maxHeight,
}) {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "success":
      case "completed":
      case "in stock":
        return "bg-[#e8f5e9] text-[#2e7d32]";
      case "progress":
        return "bg-[#e1f5fe] text-[#0288d1]";
      case "pending":
        return "bg-[#fff3e0] text-[#e67e22]";
      case "cancelled":
      case "almost sold out":
        return "bg-[#ffebee] text-[#c0392b]";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const getRankStyle = (rank) => {
    switch (rank.toLowerCase()) {
      case "gold":
        return "bg-(--gold)";
      case "silver":
        return "bg-(--silver)";
      case "bronze":
        return "bg-(--bronze)";
      default:
        return "";
    }
  };

  const getRankStyles = (orderCount) => {
    const order = Number(orderCount) || 0;

    if (order >= 31) {
      return "bg-(--gold)";
    } else if (order >= 11) {
      return "bg-(--silver)";
    } else if (order >= 0) {
      return "bg-(--bronze)";
    }

    return "";
  };

  return (
    <section
      className={`flex flex-col rounded-xl bg-white shadow-[0_4px_6px_rgba(0,0,0,0.02)] ${maxHeight}`}
    >
      <div className="sticky z-10 flex items-center justify-between rounded-t-xl border-b border-solid border-[#eee] bg-white p-5">
        {title && <h3 className="text-[20px] font-bold">{title}</h3>}
        {custom && custom}
        {options && <div>{options}</div>}
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-auto">
        <table className="w-full min-w-150 border-collapse">
          <thead>
            <tr>
              {tableTitles &&
                tableTitles.map((title, index) => (
                  <th
                    key={index}
                    className="sticky top-0 z-5 border-b-2 border-solid border-[#eee] bg-[#f8f9fa] p-3.75 text-left text-sm text-[#7d8c8d]"
                  >
                    {title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={tableTitles?.length || 5}
                  className="p-10 text-center text-gray-400"
                >
                  Loading resources.
                </td>
              </tr>
            ) : loading && !productData.length ? (
              <tr>
                <td
                  colSpan={tableTitles?.length || 5}
                  className="p-10 text-center text-gray-400"
                >
                  No products are available.
                </td>
              </tr>
            ) : productData ? (
              productData.map((p, index) => (
                <tr key={index}>
                  {p.imageUrl && p.imageUrl ? (
                    <td>
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="h-11.25 w-11.25 rounded-md object-cover"
                      />
                    </td>
                  ) : (
                    <td>
                      <img
                        src="https://picsum.photos/200"
                        alt={p.name}
                        className="h-11.25 w-11.25 rounded-md object-cover"
                      />
                    </td>
                  )}
                  {p.name && <td>{p.name}</td>}
                  {p.category && <td>{p.category}</td>}
                  {p.price && <td>{p.price}</td>}
                  {p.stock && <td>{p.stock}</td>}
                  <td>
                    <div>
                      {actions.map((action, index) => {
                        return (
                          <button
                            key={index}
                            className={twMerge(
                              "mr-1.25 cursor-pointer rounded-[5px] border-none p-2 transition hover:bg-(--primary-color) hover:text-white",
                              action.bgColor || "bg-[#ebebeb]",
                            )}
                            onClick={() =>
                              action.onClick
                                ? action.onClick(p)
                                : console.log("")
                            }
                          >
                            {action.icon}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              clientData &&
              clientData.map((c, index) => {
                const displayRank =
                  c.order >= 31 ? "Gold" : c.order >= 11 ? "Silver" : "Bronze";

                return (
                  <tr key={index}>
                    {c.fullName && (
                      <td>
                        {c.fullName}(ID: CUST-00{`${index + 1}`})
                      </td>
                    )}
                    {c.email && c.phone && (
                      <td>
                        {c.email} ({c.phone})
                      </td>
                    )}
                    {c.rank && (
                      <td>
                        <span
                          className={`${getRankStyles(c.order)} rounded-sm px-2.5 py-1 text-[12px] font-bold text-white uppercase`}
                        >
                          {displayRank}
                        </span>
                      </td>
                    )}
                    {c.order === null ? 0 : <td>{c.order}</td>}
                    {c.totalSpending === null ? (
                      `0$`
                    ) : (
                      <td>{c.totalSpending}$</td>
                    )}
                    <td>
                      <div>
                        {actions.map((action, index) => {
                          return (
                            <button
                              key={index}
                              className={twMerge(
                                "mr-1.25 cursor-pointer rounded-[5px] border-none p-2 transition hover:bg-(--primary-color) hover:text-white",
                                action.bgColor || "bg-[#ebebeb]",
                              )}
                            >
                              {action.icon}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
            {tableDatas &&
              tableDatas.map((data, index) => (
                <tr key={index}>
                  {data.orderCode && <td>{data.orderCode}</td>}
                  {data.customer && <td>{data.customer}</td>}
                  {data.product && <td>{data.product}</td>}
                  {data.totalAmount && <td>{data.totalAmount}$</td>}
                  {data.salesVolume && <td>{data.salesVolume}</td>}
                  {data.revenue && <td>{data.revenue}$</td>}

                  {data.status && (
                    <td>
                      <span
                        className={`${getStatusStyle(data.status)} rounded-[20px] px-3 py-1.5 font-bold uppercase`}
                      >
                        {data.status}
                      </span>
                    </td>
                  )}
                  {data.image && (
                    <td>
                      <img
                        src={data.image}
                        alt="Product"
                        className="h-11.25 w-11.25 rounded-md object-cover"
                      />
                    </td>
                  )}
                  {data.productInformation && (
                    <td>{data.productInformation}</td>
                  )}
                  {data.category && <td>{data.category}</td>}
                  {data.price && <td>{data.price}</td>}
                  {data.inventory && <td>{data.inventory}</td>}
                  {data.contact && <td>{data.contact}</td>}
                  {data.rank && (
                    <td>
                      <span
                        className={`${getRankStyle(data.rank)} rounded-sm px-2.5 py-1 text-[12px] font-bold text-white uppercase`}
                      >
                        {data.rank}
                      </span>
                    </td>
                  )}
                  {data.order && <td>{data.order}</td>}
                  {data.totalSpending && <td>{data.totalSpending}$</td>}
                  {actions && (
                    <td>
                      <div>
                        {actions.map((action, index) => {
                          if (typeof action.getButtons === "function") {
                            const buttons = action.getButtons(data.status);

                            return (
                              <Fragment key={index}>
                                {buttons.map((btn, btnIndex) => (
                                  <button
                                    key={btnIndex}
                                    className={twMerge(
                                      "mr-1.25 cursor-pointer rounded-[5px] border-none p-2 transition hover:bg-(--primary-color) hover:text-white",
                                      action.bgColor || "bg-[#ebebeb]",
                                    )}
                                    onClick={() =>
                                      action.onClick
                                        ? action.onClick(data)
                                        : console.log("Default Click")
                                    }
                                  >
                                    {btn.icon}
                                  </button>
                                ))}
                              </Fragment>
                            );
                          }

                          return (
                            <button
                              key={index}
                              className={twMerge(
                                "mr-1.25 cursor-pointer rounded-[5px] border-none p-2 transition hover:bg-(--primary-color) hover:text-white",
                                action.bgColor || "bg-[#ebebeb]",
                              )}
                              onClick={() =>
                                action.onClick
                                  ? action.onClick(data)
                                  : console.log("Default Click")
                              }
                            >
                              {action.icon}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
