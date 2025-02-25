// MUI
import { LocationOn } from "@mui/icons-material";

// Third party
import Map, { Marker } from "react-map-gl";

// Components
import { MAP_BOX_TOKEN } from "../../config";
import { TArenas, TStores } from "../types";

export default function MapBox({
  singleStore,
  singleOpenArena,
}: {
  singleStore?: TStores | null;
  singleOpenArena?: TArenas | null;
}) {
  return (
    <Map
      mapboxAccessToken={MAP_BOX_TOKEN}
      initialViewState={{
        longitude: 34.76832748935988,
        latitude: 31.992361177027554,
        zoom: 6,
      }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      attributionControl={false}
    >
      {(singleStore || singleOpenArena) && (
        <Marker
          longitude={
            singleOpenArena
              ? Number(singleOpenArena?.location?.YCoordinate)
              : Number(singleStore?.address?.YCoordinate)
          }
          latitude={
            singleOpenArena
              ? Number(singleOpenArena?.location?.XCoordinate)
              : Number(singleStore?.address?.XCoordinate)
          }
          anchor="bottom"
        >
          <LocationOn fontSize="large" color="primary" />
        </Marker>
      )}
    </Map>
  );
}
