import * as React from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * CARGO_TYPES data — using EXACTLY the ids, labels, titles, iconUrl and checkIconUrl provided.
 */
export const CARGO_TYPES = [{
  id: 'frigorifico',
  label: 'Frigorífico',
  title: 'Frigorífico Temperatura controlada',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/e87f7ed4-ae89-4c22-9b92-2f4f2f2df408.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/3f983036-9eed-4211-b495-6ff790888d35.svg'
}, {
  id: 'carga-general',
  label: 'Carga general',
  title: 'Carga general',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/2aefb91e-904d-41b3-8088-c450b2de674e.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/1d79ba83-9a83-4609-9646-2ceb3b8e2d74.svg'
}, {
  id: 'alimentacion-seca',
  label: 'Alimentación seca',
  title: 'Alimentación seca',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/d55bcf6f-ba7a-4f49-88a6-d6ba7b96fca9.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/faf2b5a2-8082-4477-84df-8efdd036fa8a.svg'
}, {
  id: 'industrial',
  label: 'Industrial',
  title: 'Industrial / Maquinaria pesada',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/05a51215-c4a7-447b-b7fc-b4c8616e5fd8.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/16fe92ea-a12c-429e-8179-5b0d5f69c6a1.svg'
}, {
  id: 'adr',
  label: 'ADR / Peligrosas',
  title: 'ADR / Mercancías peligrosas',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/f44e573e-8701-4cc0-98cc-af2d469264e7.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/05b3d587-89e9-4632-aa16-cf9520a60765.svg'
}, {
  id: 'granel-solido',
  label: 'Granel sólido',
  title: 'Granel sólido',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/31f52891-854b-4948-915c-2cf38922884a.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/caa4f06f-c24a-489e-a5a2-e8368b0fd030.svg'
}, {
  id: 'granel-liquido',
  label: 'Granel líquido',
  title: 'Granel líquido / Cisternas',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/dc6c0317-87de-4b38-b98a-44a1ec646105.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/603dfec9-ffc7-468a-9ee1-dc83c8da3755.svg'
}, {
  id: 'contenedores',
  label: 'Contenedores',
  title: 'Contenedores / Intermodal',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/0adb0adf-93ae-4e64-bea7-a25195d3b658.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/a91bae1d-a225-40ad-a3bb-99ed838d1b12.svg'
}, {
  id: 'expres',
  label: 'Exprés',
  title: 'Exprés / Paquetería urgente',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/6ec5d846-6c99-4e45-8d6e-bc2b9de4c983.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/2ddd396b-11dc-4a3a-bc13-245b249eaad6.svg'
}, {
  id: 'sobredimensionado',
  label: 'Sobredimensionado',
  title: 'Sobredimensionado / Especial',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/c7ce7057-ce9b-482e-a01a-9c2731246f22.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/27205095-8e7f-4e3b-9b04-32ec5cc13bac.svg'
}, {
  id: 'animales',
  label: 'Animales vivos',
  title: 'Animales vivos',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/99512bcc-47db-4689-a144-4ec84424bf81.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/8cc509be-8958-4509-84f4-61bc4cb6a104.svg'
}, {
  id: 'mudanzas',
  label: 'Mudanzas',
  title: 'Mudanzas y mobiliario',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/445b73a2-04ab-4c94-877f-3fdda3c9683d.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/9edb0f57-dd32-44bb-892e-6ef20dc0c914.svg'
}, {
  id: 'sanitario',
  label: 'Sanitario',
  title: 'Sanitario / Farmacéutico',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/c9711df5-da47-4828-b1cf-b166d1355407.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/b59da95e-7851-4704-9c48-04d1b5e860eb.svg'
}, {
  id: 'residuos',
  label: 'Residuos',
  title: 'Residuos',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/593a8317-5c29-4b98-bc59-77fd61f9948f.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/27447675-a2ba-405b-9711-db2867dbf84d.svg'
}, {
  id: 'valores',
  label: 'Valores / Alto riesgo',
  title: 'Valores y mercancías de alto riesgo',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/4603486d-fd31-45d2-8f47-8601afb65356.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/4844e5b6-4fda-445f-a16e-b368d9dcafa0.svg'
}, {
  id: 'forestal',
  label: 'Forestal / Agrícola',
  title: 'Forestal y agrícola',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/1da506bf-79ca-46d6-867f-07284c9070cf.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/8f596f11-92d2-4def-a7c4-1521ea6552a4.svg'
}, {
  id: 'postal',
  label: 'Postal',
  title: 'Postal y mensajería',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/b1636a8b-d81e-4147-a756-d4434dc8401b.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/75408e50-4e65-4edc-a02f-60df4cb21f7c.svg'
}, {
  id: 'automotriz',
  label: 'Automotriz',
  title: 'Automotriz',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/16f67da3-9a43-43b5-95fb-b808b9b736c0.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/a719f57b-6761-45cd-9f7f-ebe833dc4388.svg'
}, {
  id: 'arte',
  label: 'Arte / Exposiciones',
  title: 'Obras de arte y exposiciones',
  iconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/fabca283-c38b-4d96-8642-7b0765602d29.svg',
  checkIconUrl: 'https://storage.googleapis.com/storage.magicpath.ai/user/375239999739801600/figma-assets/49966192-3e5a-4fe4-8815-41e096886f99.svg'
}];
export interface CargoTypeSelectProps {
  value?: string;
  onChange?: (id: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  /** Internal use for demo to show static open state */
  forceOpen?: boolean;
  /** Internal use for demo to mock search term */
  forceSearchTerm?: string;
}
export const CargoTypeSelect = ({
  value,
  onChange,
  placeholder = 'Tipo de carga',
  label,
  className,
  forceOpen = false,
  forceSearchTerm = ''
}: CargoTypeSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(forceOpen);
  const [searchTerm, setSearchTerm] = React.useState(forceSearchTerm);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const selectedCargo = CARGO_TYPES.find(c => c.id === value);
  const filteredCargoTypes = React.useMemo(() => {
    if (!searchTerm) return CARGO_TYPES;
    const lowerSearch = searchTerm.toLowerCase();
    return CARGO_TYPES.filter(c => c.label.toLowerCase().includes(lowerSearch) || c.title.toLowerCase().includes(lowerSearch));
  }, [searchTerm]);
  const toggleDropdown = () => {
    if (forceOpen) return;
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };
  const handleSelect = (id: string) => {
    if (forceOpen) return;
    onChange?.(id);
    setIsOpen(false);
    setSearchTerm('');
  };

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (!forceOpen) setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [forceOpen]);

  // Handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!forceOpen) setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [forceOpen]);

  // Focus search input when opening
  React.useEffect(() => {
    if (isOpen && !forceOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, forceOpen]);
  return <div className={cn('relative w-full flex flex-col gap-1.5', className)} ref={containerRef} style={{
    fontFamily: "'Poppins', sans-serif"
  }}>
      {label && <span className="text-sm font-medium text-[#2A2A38]" style={{
      fontFamily: "'Poppins', sans-serif"
    }}>
          {label}
        </span>}

      {/* Trigger */}
      <button type="button" onClick={toggleDropdown} className={cn('flex items-center justify-between w-full h-[44px] px-[12px] bg-white border border-[#D2D2E1] rounded-[8px] transition-all duration-150 text-left outline-none', isOpen ? 'border-[#c22339] ring-1 ring-[#c22339]/10' : 'hover:border-[#9CA3AF]')} style={{
      fontFamily: "'Poppins', sans-serif"
    }}>
        <div className="flex items-center gap-2 overflow-hidden">
          {selectedCargo ? <React.Fragment>
              <img src={selectedCargo.iconUrl} alt={selectedCargo.label} className="w-5 h-5 flex-shrink-0 cargo-icon-muted" />
              <span className="text-[14px] font-medium text-[#2A2A38] truncate" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
                {selectedCargo.label}
              </span>
            </React.Fragment> : <span className="text-[14px] text-[#9CA3AF]" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>
              {placeholder}
            </span>}
        </div>
        <ChevronDown size={16} className={cn('text-[#6B7280] transition-transform duration-200 flex-shrink-0', isOpen && 'rotate-180')} />
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && <motion.div initial={forceOpen ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: -8
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -8
      }} transition={{
        duration: 0.15,
        ease: 'easeOut'
      }} className="absolute top-[calc(100%+6px)] left-0 w-full bg-white border border-[#D2D2E1] rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.10)] z-50 overflow-hidden">
            {/* Search Input Row */}
            <div className="flex items-center gap-2 px-[14px] py-[10px] border-b border-[#E5E7EB]">
              <Search size={16} className="text-[#9CA3AF] flex-shrink-0" />
              <input ref={inputRef} type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Buscar tipo de carga..." className="w-full text-[14px] text-[#2A2A38] placeholder-[#9CA3AF] bg-transparent border-none outline-none" style={{
            fontFamily: "'Poppins', sans-serif"
          }} />
              {searchTerm && !forceOpen && <button onClick={() => setSearchTerm('')} className="text-[#9CA3AF] hover:text-[#6B7280]">
                  <X size={14} />
                </button>}
            </div>

            {/* Scrollable List */}
            <div className="max-height-[336px] max-h-[336px] overflow-y-auto custom-scrollbar">
              {filteredCargoTypes.length > 0 ? filteredCargoTypes.map((cargo, index) => {
            const isSelected = value === cargo.id;
            return <div key={cargo.id}>
                      <button type="button" onClick={() => handleSelect(cargo.id)} className={cn('flex items-center w-full min-h-[48px] px-[14px] py-[8px] gap-3 transition-colors text-left', isSelected ? 'bg-[#FFF5F6]' : 'hover:bg-[#F9F9FC]')} style={{
                fontFamily: "'Poppins', sans-serif"
              }}>
                        <img src={isSelected ? cargo.checkIconUrl : cargo.iconUrl} alt={cargo.label} className={cn('w-6 h-6 flex-shrink-0', !isSelected && 'cargo-icon-muted')} />
                        <span className={cn('text-[14px] font-medium flex-1 truncate', isSelected ? 'text-[#c22339]' : 'text-[#2A2A38]')} style={{
                  fontFamily: "'Poppins', sans-serif"
                }}>
                          {cargo.title}
                        </span>
                        {isSelected && <Check size={16} className="text-[#c22339] flex-shrink-0" />}
                      </button>
                      {index < filteredCargoTypes.length - 1 && <div className="h-px w-full bg-[#F3F4F6]" />}
                    </div>;
          }) : <div className="flex flex-col items-center justify-center py-[20px] px-[14px]">
                  <span className="text-[14px] text-[#9CA3AF]" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Sin resultados</span>
                </div>}
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export const CargoTypeSelectDemo = () => {
  const [selected1, setSelected1] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>('frigorifico');
  return <main className="min-h-screen w-full bg-[#F5F5F8] flex justify-center py-12 px-6" style={{
    fontFamily: "'Poppins', sans-serif"
  }}>
      <section className="w-full max-w-[900px] flex flex-col">
        <h1 className="text-[24px] font-bold text-[#2A2A38] mb-8" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>
          CargoTypeSelect — Demo
        </h1>

        <div className="flex flex-wrap gap-6 mb-12">
          {/* Card 1: Sin selección */}
          <article className="flex-1 min-w-[260px] bg-white border border-[#D2D2E1] rounded-[12px] p-6">
            <h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Sin selección
            </h2>
            <CargoTypeSelect label="Tipo de carga" value={selected1} onChange={setSelected1} placeholder="Tipo de carga" />
          </article>

          {/* Card 2: Selección activa */}
          <article className="flex-1 min-w-[260px] bg-white border border-[#D2D2E1] rounded-[12px] p-6">
            <h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Selección activa
            </h2>
            <CargoTypeSelect label="Tipo de carga" value={selected2} onChange={setSelected2} />
          </article>

          {/* Card 3: Dropdown abierto (Estático) */}
          <article className="flex-1 min-w-[260px] bg-white border border-[#D2D2E1] rounded-[12px] p-6 overflow-visible">
            <h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4" style={{
            fontFamily: "'Poppins', sans-serif"
          }}>
              Dropdown abierto
            </h2>
            <div className="relative h-[440px]">
              <CargoTypeSelect label="Tipo de carga" value="carga-general" forceOpen={true} forceSearchTerm="car" />
            </div>
          </article>
        </div>

        {/* Selected Value Info */}
        <footer className="mt-auto bg-white border border-[#D2D2E1] rounded-[12px] p-6">
          <h3 className="text-sm font-medium text-[#2A2A38] mb-3" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>Valores seleccionados</h3>
          <div className="flex gap-4">
            <div className="flex-1 bg-[#F9F9FC] border border-[#E5E7EB] rounded-[8px] p-3">
              <span className="text-xs text-[#6B7280] block mb-1" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Select 1:</span>
              <code className="text-[13px] text-[#c22339] font-mono">
                {selected1 || 'null'}
              </code>
            </div>
            <div className="flex-1 bg-[#F9F9FC] border border-[#E5E7EB] rounded-[8px] p-3">
              <span className="text-xs text-[#6B7280] block mb-1" style={{
              fontFamily: "'Poppins', sans-serif"
            }}>Select 2:</span>
              <code className="text-[13px] text-[#c22339] font-mono">
                {selected2 || 'null'}
              </code>
            </div>
          </div>
        </footer>
      </section>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D2D2E1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
        /* SVG icon color: maps black fills to #55556C */
        .cargo-icon-muted {
          filter: brightness(0) saturate(100%) invert(33%) sepia(8%) saturate(500%) hue-rotate(215deg) brightness(92%);
        }
      `}</style>
    </main>;
};
export default CargoTypeSelect;