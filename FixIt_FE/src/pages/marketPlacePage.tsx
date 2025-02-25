// Third party
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MarketPlacePage() {
  const location = useLocation();
  const isMarketplacePage = location?.pathname?.includes("/marketplace/");
  const navigate = useNavigate();

  return (
    <>
      {!isMarketplacePage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <button onClick={() => navigate("add")} style={{ fontSize: "3em" }}>
            הוספת מוצר
          </button>
        </div>
      )}

      <Outlet />
    </>
  );
}
