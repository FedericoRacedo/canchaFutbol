import { useState, useRef } from "react";
import "./App.css";

const playersData = [
  {
    id: 1,
    name: "Martinez",
    x: 125,
    y: 390,
    img: "../public/imagenesJugadores/dibuMartinez.jpg",
    videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ],
  }, 
  { id: 2, name: "Romero", x: 315, y: 500, img: "../public/imagenesJugadores/cutiRomero.jpg",videos: [{ title: "Jugadas Claves", url: "https://www.youtube.com/watch?v=ulM_qFdsoLg" },{ title: "Errores", url: "https://www.youtube.com/shorts/2i4PXzqYnWk" },{ title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }], },
  { id: 3, name: "Tagliafico", x: 400, y: 70, img: "../public/imagenesJugadores/tagliafico.jpg" ,videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 4, name: "Molina", x: 400, y: 675, img: "../public/imagenesJugadores/molina.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=0niaHin2DSI" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 5, name: "Enzo", x: 480, y: 375, img: "../public/imagenesJugadores/enzoFernandez.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 6, name: "Otamendi", x: 315, y: 150, img: "../public/imagenesJugadores/otamendi.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 7, name: "De Paul", x: 530, y: 510, img: "../public/imagenesJugadores/dePaul.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 8, name: "Mac Allister", x: 530, y: 230, img: "../public/imagenesJugadores/alexisMacAllister.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 9, name: "Julian", x: 670, y: 370, img: "../public/imagenesJugadores/julianAlvarez.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 10, name: "Messi", x: 690, y: 600, img: "../public/imagenesJugadores/messi.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 11, name: "Di Maria", x: 690, y: 145, img: "../public/imagenesJugadores/diMaria.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 12, name: "Armani", x: 45, y: 70, img: "../public/imagenesJugadores/diMaria.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 13, name: "Lisandro", x: 45, y: 170, img: "../public/imagenesJugadores/lisandro.webp",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 14, name: "Gio Lo Celso", x: 45, y: 270, img: "../public/imagenesJugadores/gioLoCelso.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 15, name: "Lautaro", x: 45, y: 370, img: "../public/imagenesJugadores/lautaro.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
];

export default function App() {
  const [players, setPlayers] = useState(playersData);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const draggingPlayerRef = useRef(null);

  const handleMouseDown = (e, playerId) => {
    draggingPlayerRef.current = {
      id: playerId,
      offsetX: e.clientX,
      offsetY: e.clientY,
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!draggingPlayerRef.current) return;

    const { id, offsetX, offsetY } = draggingPlayerRef.current;
    const dx = e.clientX - offsetX;
    const dy = e.clientY - offsetY;

    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, x: p.x + dx, y: p.y + dy } : p
      )
    );

    draggingPlayerRef.current.offsetX = e.clientX;
    draggingPlayerRef.current.offsetY = e.clientY;
  };

  const handleMouseUp = () => {
    draggingPlayerRef.current = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="field">
      {players.map((player) => (
        <div
          key={player.id}
          className="player"
          style={{ left: player.x, top: player.y }}
          onMouseDown={(e) => handleMouseDown(e, player.id)}
          onDoubleClick={() => setSelectedPlayer(player)}
        >
          <img src={player.img} alt={player.name} />
          <span>{player.name}</span>
        </div>
      ))}

      {selectedPlayer && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedPlayer.name}</h2>
            <img src={selectedPlayer.img} alt={selectedPlayer.name} />
            <p>Videos del jugador:</p>
            <div className="jugadas">
              {selectedPlayer.videos.map((video, index) => (
                <a key={index} href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              ))}
            </div>
            <br />
            <button onClick={() => setSelectedPlayer(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}





