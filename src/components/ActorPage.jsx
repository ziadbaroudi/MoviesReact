import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function ActorPage() {
  const actorId = useParams();
  useEffect(() => {
    fetch(`
      https://api.themoviedb.org/3/person/${actorId.id}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&language=en-US`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <p>I am working</p>
    </div>
  );
}

export default ActorPage;
