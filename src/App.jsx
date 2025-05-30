import { useState, useRef } from "react";
import "./App.css";

const playersData = [
  { id: 1, name: "Martinez", x: 15.63, y: 48.75, img: "../public/imagenesJugadores/dibuMartinez.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 2, name: "Romero", x: 39.38, y: 62.5, img: "../public/imagenesJugadores/cutiRomero.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 3, name: "Tagliafico", x: 50, y: 8.75, img: "../public/imagenesJugadores/tagliafico.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 4, name: "Molina", x: 50, y: 84.38, img: "../public/imagenesJugadores/molina.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 5, name: "Enzo", x: 60, y: 46.88, img: "../public/imagenesJugadores/enzoFernandez.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 6, name: "Otamendi", x: 39.38, y: 18.75, img: "../public/imagenesJugadores/otamendi.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 7, name: "De Paul", x: 66.25, y: 63.75, img: "../public/imagenesJugadores/dePaul.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 8, name: "Mac Allister", x: 66.25, y: 28.75, img: "../public/imagenesJugadores/alexisMacAllister.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 9, name: "Julian", x: 83.75, y: 46.25, img: "../public/imagenesJugadores/julianAlvarez.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 10, name: "Messi", x: 86.25, y: 75, img: "../public/imagenesJugadores/messi.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 11, name: "Di Maria", x: 86.25, y: 18.13, img: "../public/imagenesJugadores/diMaria.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 12, name: "Armani", x: 5.63, y: 8.75, img: "../public/imagenesJugadores/diMaria.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 13, name: "Lisandro", x: 5.63, y: 21.25, img: "../public/imagenesJugadores/lisandro.webp", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 14, name: "Gio Lo Celso", x: 5.63, y: 33.75, img: "../public/imagenesJugadores/gioLoCelso.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
  { id: 15, name: "Lautaro", x: 5.63, y: 46.25, img: "../public/imagenesJugadores/lautaro.jpg", videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=Vz1ZCLf-_fg" }
    ], },
];

export default function App() {
  const fieldRef = useRef(null);
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
    if (!draggingPlayerRef.current || !fieldRef.current) return;

    const { id, offsetX, offsetY } = draggingPlayerRef.current;
    const dx = e.clientX - offsetX;
    const dy = e.clientY - offsetY;

    const fieldWidth = fieldRef.current.offsetWidth;
    const fieldHeight = fieldRef.current.offsetHeight;

    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              x: Math.max(0, Math.min(100, p.x + (dx / fieldWidth) * 100)),
              y: Math.max(0, Math.min(100, p.y + (dy / fieldHeight) * 100)),
            }
          : p
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
    <div className="field" ref={fieldRef}>
      {players.map((player) => (
        <div
          key={player.id}
          className="player"
          style={{ left: `${player.x}%`, top: `${player.y}%` }}
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