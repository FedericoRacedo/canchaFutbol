import { useState } from "react";
import "./App.css";

const playersData = [
  {
    id: 1,
    name: "Martinez",
    x: 50,
    y: 300,
    img: "../imagenesJugadores/dibuMartinez.jpg",
    videos: [
      { title: "Atajadas clave", url: "https://www.youtube.com/watch?v=Ml4p4X2h0Sw" },
      { title: "Penales atajados", url: "https://www.youtube.com/watch?v=dnkRhVycdIE" },
      { title: "Partido completo", url: "https://www.youtube.com/watch?v=SQ4-2H2Pch0" }
    ],
  }, 
  { id: 2, name: "Romero", x: 150, y: 400, img: "../imagenesJugadores/cutiRomero.jpg",videos: [{ title: "Jugadas Claves", url: "https://www.youtube.com/watch?v=ulM_qFdsoLg" },{ title: "Errores", url: "https://www.youtube.com/shorts/2i4PXzqYnWk" },{ title: "Partido completo", url: "https://www.youtube.com/watch?v=SQ4-2H2Pch0" }], },
  { id: 3, name: "Tagliafico", x: 150, y: 80, img: "../imagenesJugadores/tagliafico.jpg" ,videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 4, name: "Molina", x: 150, y: 550, img: "../imagenesJugadores/molina.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 5, name: "Enzo", x: 315, y: 300, img: "../imagenesJugadores/enzoFernandez.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 6, name: "Otamendi", x: 150, y: 250, img: "../imagenesJugadores/otamendi.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 7, name: "De Paul", x: 315, y: 500, img: "../imagenesJugadores/dePaul.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 8, name: "Mac Allister", x: 315, y: 150, img: "../imagenesJugadores/alexisMacAllister.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 9, name: "Jualian", x: 600, y: 300, img: "../imagenesJugadores/julianAlvarez.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 10, name: "Messi", x: 550, y: 100, img: "../imagenesJugadores/messi.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
  { id: 11, name: "Di Maria", x: 550, y: 600, img: "../imagenesJugadores/diMaria.jpg",videos: [{ title: "Atajadas clave", url: "https://www.youtube.com/watch?v=abc1" },{ title: "Penales atajados", url: "https://www.youtube.com/watch?v=abc2" },], },
];

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="field">
      {playersData.map((player) => (
        <div
          key={player.id}
          className="player"
          style={{ left: player.x, top: player.y }}
          onClick={() => setSelectedPlayer(player)}
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