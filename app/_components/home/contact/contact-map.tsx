import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface Props {
  cssClasses?: string;
}

const ContactMap = ({ cssClasses }: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBEHEWRnqpHLrFtUqs2oyORbfpvRwmdoTM",
  });
  if (!isLoaded)
    return (
      <div
        className={`border rounded-xl bg-white border-black text-[30px] font-light text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Map loading...
      </div>
    );
  if (loadError)
    return (
      <div
        className={`border rounded-xl bg-white border-black text-[30px] font-light text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Error loading map...
      </div>
    );
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: -34.0530242, lng: 23.3566167 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <MarkerF position={{ lat: -34.0530242, lng: 23.3566167 }} />
    </GoogleMap>
  );
};

export default ContactMap;
