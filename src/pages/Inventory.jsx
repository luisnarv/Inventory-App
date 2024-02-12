import { useState } from "react";
import styled from "styled-components";

const fakeData = [
  {
    id: 1,
    codigo: "RTW-AC750",
    nombre: "Router WiFi AC750",
    descripcion: "Router inalámbrico de doble banda",
    marca: "TP-Link",
    modelo: "Archer C20",
    cantidad: 50,
    precio_unitario: 35.99,
    proveedor: "Tech Distributors Inc.",
  },
  {
    id: 2,
    codigo: "TEL-IP-21P",
    nombre: "Teléfono IP",
    descripcion: "Teléfono VoIP con pantalla LCD",
    marca: "Yealink",
    modelo: "SIP-T21P E2",
    cantidad: 30,
    precio_unitario: 69.99,
    proveedor: "Comunicaciones Globales S.A.",
  },
  {
    id: 3,
    codigo: "SW-8PT-GIG",
    nombre: "Switch Gigabit de 8 puertos",
    descripcion: "Switch de red Ethernet de alta velocidad",
    marca: "NETGEAR",
    modelo: "GS308",
    cantidad: 20,
    precio_unitario: 49.99,
    proveedor: "Soluciones de Redes Avanzadas Ltda.",
  },
  {
    id: 4,
    codigo: "CAB-CAT6-5FT",
    nombre: "Cable de red Cat6",
    descripcion: "Cable Ethernet blindado de 5 pies",
    marca: "AmazonBasics",
    cantidad: 100,
    precio_unitario: 7.99,
    proveedor: "Cables y Conectores Corp.",
  },
];

const RowHead = styled.th`
  min-width: 100px;

  padding: 1rem;
`;

const RowBody = styled.td`
  text-align: center;

  margin: 0px;
  padding: 1rem;
`;

const StyleTable = styled.table`
  border: solid 2px;
`;

const Inventory = () => {
  const [data, setData] = useState(fakeData);

  function handleSearchFil(e) {
    const fil = e.target.value;
    const filters = fakeData.filter((element) => element.nombre.includes(fil));
    console.log(filters);
    if (fil.length < 3) return;
    setData(filters);
  }

  console.log(data);
  return (
    <div>
      <h2>Gestión de inventario</h2>
      <input type="search" placeholder="Search..." onChange={handleSearchFil} />
      <StyleTable>
        <tr>
          <RowHead>Código</RowHead>
          <RowHead>Nombre</RowHead>
          <RowHead>Marca</RowHead>
          <RowHead>Descripción</RowHead>
          <RowHead>Cantidad</RowHead>
          <RowHead>Precio-unit</RowHead>
          <RowHead>Proveedor</RowHead>
          <RowHead></RowHead>
        </tr>
        {data.map((e) => (
          <tr key={e.codigo}>
            <RowBody>{e.codigo}</RowBody>
            <RowBody>{e.nombre}</RowBody>
            <RowBody>{e.marca}</RowBody>
            <RowBody>{e.descripcion}</RowBody>
            <RowBody>{e.cantidad}</RowBody>
            <RowBody>{e.precio_unitario}</RowBody>
            <RowBody>{e.proveedor}</RowBody>
            <RowBody>
              <button>...</button>
            </RowBody>
            <span>-</span>
          </tr>
        ))}
      </StyleTable>
    </div>
  );
};

export default Inventory;
