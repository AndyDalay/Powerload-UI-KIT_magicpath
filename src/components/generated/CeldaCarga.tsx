import * as React from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type MercanciaType = "general" | "palets" | "maquinaria" | "refrigerada";
type ModalidadType = "FTL" | "LTL";
interface CeldaCargaProps {
  id: string;
  fecha: string;
  mercancia: MercanciaType;
  modalidad: ModalidadType;
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconoGeneral() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 1L6.84 3.52L9.51 3.52L7.34 5.08L8.18 7.6L6 6.04L3.82 7.6L4.66 5.08L2.49 3.52L5.16 3.52L6 1Z" fill="#7E7E97" />
      <path d="M6 4.5L6.42 5.76L7.755 5.76L6.67 6.54L7.09 7.8L6 7.02L4.91 7.8L5.33 6.54L4.245 5.76L5.58 5.76L6 4.5Z" fill="none" />
    </svg>;
}
function IconoPalets() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1.5" y="4" width="9" height="5.5" rx="0.5" stroke="#7E7E97" strokeWidth="1" fill="none" />
      <rect x="1.5" y="4" width="9" height="2" rx="0.5" fill="#7E7E97" opacity="0.25" />
      <line x1="4" y1="9.5" x2="4" y2="11" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="8" y1="9.5" x2="8" y2="11" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="2.5" y1="10.5" x2="9.5" y2="10.5" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <rect x="3" y="1.5" width="2.5" height="2.5" rx="0.25" stroke="#7E7E97" strokeWidth="0.8" fill="none" />
      <rect x="6.5" y="1.5" width="2.5" height="2.5" rx="0.25" stroke="#7E7E97" strokeWidth="0.8" fill="none" />
    </svg>;
}
function IconoMaquinaria() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 4C4.895 4 4 4.895 4 6C4 7.105 4.895 8 6 8C7.105 8 8 7.105 8 6C8 4.895 7.105 4 6 4Z" fill="#7E7E97" />
      <path d="M6 2.5C6.275 2.5 6.5 2.275 6.5 2V1.5C6.5 1.225 6.275 1 6 1C5.725 1 5.5 1.225 5.5 1.5V2C5.5 2.275 5.725 2.5 6 2.5Z" fill="#7E7E97" />
      <path d="M6 9.5C5.725 9.5 5.5 9.725 5.5 10V10.5C5.5 10.775 5.725 11 6 11C6.275 11 6.5 10.775 6.5 10.5V10C6.5 9.725 6.275 9.5 6 9.5Z" fill="#7E7E97" />
      <path d="M9.5 5.5H10C10.275 5.5 10.5 5.725 10.5 6C10.5 6.275 10.275 6.5 10 6.5H9.5C9.225 6.5 9 6.275 9 6C9 5.725 9.225 5.5 9.5 5.5Z" fill="#7E7E97" />
      <path d="M2.5 5.5H2C1.725 5.5 1.5 5.725 1.5 6C1.5 6.275 1.725 6.5 2 6.5H2.5C2.775 6.5 3 6.275 3 6C3 5.725 2.775 5.5 2.5 5.5Z" fill="#7E7E97" />
      <path d="M8.536 3.05L8.89 2.696C9.085 2.501 9.401 2.501 9.596 2.696C9.791 2.891 9.791 3.207 9.596 3.402L9.242 3.756C9.047 3.951 8.731 3.951 8.536 3.756C8.341 3.561 8.341 3.245 8.536 3.05Z" fill="#7E7E97" />
      <path d="M3.464 8.95L3.11 9.304C2.915 9.499 2.599 9.499 2.404 9.304C2.209 9.109 2.209 8.793 2.404 8.598L2.758 8.244C2.953 8.049 3.269 8.049 3.464 8.244C3.659 8.439 3.659 8.755 3.464 8.95Z" fill="#7E7E97" />
      <path d="M8.536 8.95C8.731 8.755 9.047 8.755 9.242 8.95L9.596 9.304C9.791 9.499 9.791 9.815 9.596 10.01C9.401 10.205 9.085 10.205 8.89 10.01L8.536 9.656C8.341 9.461 8.341 9.145 8.536 8.95Z" fill="#7E7E97" />
      <path d="M3.464 3.05C3.269 3.245 2.953 3.245 2.758 3.05L2.404 2.696C2.209 2.501 2.209 2.185 2.404 1.99C2.599 1.795 2.915 1.795 3.11 1.99L3.464 2.344C3.659 2.539 3.659 2.855 3.464 3.05Z" fill="#7E7E97" />
    </svg>;
}
function IconoRefrigerada() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="6" y1="1" x2="6" y2="11" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="1" y1="6" x2="11" y2="6" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="2.636" y1="2.636" x2="9.364" y2="9.364" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="9.364" y1="2.636" x2="2.636" y2="9.364" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="5" y1="2" x2="7" y2="2" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="5" y1="10" x2="7" y2="10" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="2" y1="5" x2="2" y2="7" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="5" x2="10" y2="7" stroke="#7E7E97" strokeWidth="1" strokeLinecap="round" />
    </svg>;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const mercanciaLabels: Record<MercanciaType, string> = {
  general: "Carga general",
  palets: "Palets",
  maquinaria: "Maquinaria",
  refrigerada: "Refrigerada"
};
const mercanciaIconos: Record<MercanciaType, React.ReactNode> = {
  general: <IconoGeneral />,
  palets: <IconoPalets />,
  maquinaria: <IconoMaquinaria />,
  refrigerada: <IconoRefrigerada />
};
const showcaseVariants: CeldaCargaProps[] = [{
  id: "PL-2405-00125",
  fecha: "05/05/2025 · 08:00",
  mercancia: "general",
  modalidad: "FTL"
}, {
  id: "PL-2405-00124",
  fecha: "04/05/2025 · 17:30",
  mercancia: "palets",
  modalidad: "LTL"
}, {
  id: "PL-2405-00123",
  fecha: "04/05/2025 · 09:15",
  mercancia: "maquinaria",
  modalidad: "FTL"
}, {
  id: "PL-2405-00122",
  fecha: "05/05/2025 · 14:00",
  mercancia: "refrigerada",
  modalidad: "FTL"
}];

// ─── Atomic Cell ─────────────────────────────────────────────────────────────

function CeldaCargaCell({
  id,
  fecha,
  mercancia,
  modalidad
}: CeldaCargaProps) {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 16px",
    gap: "3px",
    minHeight: "96px",
    width: "220px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #F3F3F9",
    boxSizing: "border-box"
  }}>
      {/* Line 1 — ID */}
      <span style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "12px",
      fontWeight: 600,
      color: "#2A2A38",
      letterSpacing: "0.8px",
      lineHeight: 1.4
    }}>
        {id}
      </span>

      {/* Line 2 — Fecha y hora */}
      <span style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "11px",
      fontWeight: 400,
      color: "#7E7E97",
      lineHeight: 1.4
    }}>
        {fecha}
      </span>

      {/* Line 3 — Tipo de mercancía */}
      <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6px"
    }}>
        {mercanciaIconos[mercancia]}
        <span style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "11px",
        fontWeight: 400,
        color: "#7E7E97",
        lineHeight: 1.4
      }}>
          {mercanciaLabels[mercancia]}
        </span>
      </div>

      {/* Line 4 — Badge modalidad */}
      <div>
        <span style={{
        display: "inline-block",
        borderRadius: "100px",
        padding: "2px 8px",
        border: "1px solid #E2E8F0",
        backgroundColor: "transparent",
        fontSize: "10px",
        fontWeight: 600,
        color: "#55556C",
        fontFamily: "Poppins, sans-serif",
        lineHeight: 1.6,
        letterSpacing: "0.3px"
      }}>
          {modalidad}
        </span>
      </div>
    </div>;
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export function CeldaCarga() {
  return <div style={{
    minHeight: "100vh",
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 32px",
    fontFamily: "Poppins, sans-serif"
  }}>
      {/* Header */}
      <div style={{
      marginBottom: "40px",
      textAlign: "center"
    }}>
        <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "10px",
        fontWeight: 600,
        color: "#c22339",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "8px"
      }}>
          ATOMIC — CELDA TABLA
        </p>
        <h1 style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "22px",
        fontWeight: 700,
        color: "#2A2A38",
        margin: 0,
        letterSpacing: "-0.3px"
      }}>
          Celda de Carga
        </h1>
        <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "13px",
        fontWeight: 400,
        color: "#7E7E97",
        marginTop: "6px"
      }}>
          Identifica una carga con ID, fecha, tipo de mercancía y modalidad
        </p>
      </div>

      {/* Showcase grid */}
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0px",
      border: "1px solid #F3F3F9",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0px 2px 12px rgba(42,42,56,0.06)"
    }}>
        {/* Column header */}
        <div style={{
        width: "220px",
        padding: "10px 16px",
        backgroundColor: "#FAFAFA",
        borderBottom: "1px solid #F3F3F9"
      }}>
          <span style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          color: "#BDBDD1",
          letterSpacing: "0.5px",
          textTransform: "uppercase"
        }}>
            Carga
          </span>
        </div>

        {/* Variants */}
        {showcaseVariants.map(variant => <CeldaCargaCell key={variant.id} id={variant.id} fecha={variant.fecha} mercancia={variant.mercancia} modalidad={variant.modalidad} />)}
      </div>

      {/* Legend */}
      <div style={{
      marginTop: "32px",
      display: "flex",
      gap: "24px",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
        {showcaseVariants.map(v => <div key={v.id} style={{
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
            <span style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "11px",
          color: "#7E7E97"
        }}>
              {mercanciaLabels[v.mercancia]}
            </span>
            <span style={{
          display: "inline-block",
          borderRadius: "100px",
          padding: "1px 7px",
          border: "1px solid #E2E8F0",
          fontSize: "10px",
          fontWeight: 600,
          color: "#55556C",
          fontFamily: "Poppins, sans-serif"
        }}>
              {v.modalidad}
            </span>
          </div>)}
      </div>
    </div>;
}