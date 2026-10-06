import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  X, 
  Check, 
  RefreshCw, 
  Trash2, 
  Sparkles, 
  Sliders, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { StatusNeoLogo } from './StatusNeoLogo';

interface LogoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoManagerModal: React.FC<LogoManagerModalProps> = ({ isOpen, onClose }) => {
  const [activeLogoType, setActiveLogoType] = useState<string>('techpivot');
  const [customLogoData, setCustomLogoData] = useState<string | null>(null);
  const [customLogoName, setCustomLogoName] = useState<string>('');
  const [logoHeight, setLogoHeight] = useState<number>(38);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync with localStorage on mount & open
  useEffect(() => {
    if (isOpen) {
      const savedType = localStorage.getItem('app_brand_logo_type') || 'techpivot';
      const savedCustom = localStorage.getItem('app_custom_logo_data');
      const savedName = localStorage.getItem('app_custom_logo_name') || 'Uploaded Logo';
      const savedHeight = Number(localStorage.getItem('app_logo_height')) || 38;

      setActiveLogoType(savedType);
      setCustomLogoData(savedCustom);
      setCustomLogoName(savedName);
      setLogoHeight(savedHeight);
      setUploadSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (SVG, PNG, JPG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setCustomLogoData(dataUrl);
        setCustomLogoName(file.name);
        setActiveLogoType('custom');
        
        // Save to localStorage
        localStorage.setItem('app_custom_logo_data', dataUrl);
        localStorage.setItem('app_custom_logo_name', file.name);
        localStorage.setItem('app_brand_logo_type', 'custom');
        
        // Notify all logo instances
        window.dispatchEvent(new Event('brand-logo-updated'));
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSelectPreset = (type: 'techpivot' | 'statusneo' | 'custom') => {
    setActiveLogoType(type);
    localStorage.setItem('app_brand_logo_type', type);
    window.dispatchEvent(new Event('brand-logo-updated'));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setLogoHeight(val);
    localStorage.setItem('app_logo_height', val.toString());
    window.dispatchEvent(new Event('brand-logo-updated'));
  };

  const handleRemoveCustomLogo = () => {
    localStorage.removeItem('app_custom_logo_data');
    localStorage.removeItem('app_custom_logo_name');
    setCustomLogoData(null);
    setCustomLogoName('');
    if (activeLogoType === 'custom') {
      setActiveLogoType('techpivot');
      localStorage.setItem('app_brand_logo_type', 'techpivot');
    }
    window.dispatchEvent(new Event('brand-logo-updated'));
  };

  const handleResetDefaults = () => {
    localStorage.removeItem('app_brand_logo_type');
    localStorage.removeItem('app_custom_logo_data');
    localStorage.removeItem('app_custom_logo_name');
    localStorage.removeItem('app_logo_height');
    setActiveLogoType('techpivot');
    setCustomLogoData(null);
    setLogoHeight(38);
    window.dispatchEvent(new Event('brand-logo-updated'));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FAC400] text-slate-900 flex items-center justify-center font-bold shadow-xs">
              <Upload className="w-5 h-5 text-black" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">Replace Brand Logo</h2>
              <p className="text-xs text-slate-500 font-medium">Upload your logo file or switch between brand identities</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* 1. Drag & Drop File Upload Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                1. Upload Your Custom Logo
              </span>
              <span className="text-[11px] text-slate-500">Supports SVG, PNG, WebP, JPG</span>
            </div>

            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  handleFileUpload(e.dataTransfer.files[0]);
                }
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                isDragging 
                  ? 'border-[#FAC400] bg-amber-50/60 scale-[1.01]' 
                  : 'border-slate-300 hover:border-slate-400 bg-slate-50/60 hover:bg-slate-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".svg,.png,.jpg,.jpeg,.webp"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileUpload(e.target.files[0]);
                  }
                }}
              />

              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700">
                  <Upload className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Click to browse or drag &amp; drop your logo here
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Transparent SVG or high-res PNG recommended for crisp rendering
                  </p>
                </div>
              </div>
            </div>

            {uploadSuccess && (
              <div className="mt-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Logo successfully uploaded and activated site-wide!</span>
              </div>
            )}
          </div>

          {/* 2. Choose Active Logo Preset */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-3">
              2. Select Active Brand Logo
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              {/* Option A: TechPivot */}
              <div
                onClick={() => handleSelectPreset('techpivot')}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                  activeLogoType === 'techpivot'
                    ? 'border-slate-900 bg-slate-50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      Recommended
                    </span>
                    {activeLogoType === 'techpivot' && (
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                        <Check className="w-3 h-3 text-[#FAC400]" />
                      </span>
                    )}
                  </div>
                  <div className="h-10 flex items-center justify-center bg-white rounded-lg border border-slate-100 px-2 py-1 mb-2">
                    <StatusNeoLogo forceType="techpivot" height={28} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">TechPivot Brand</div>
                  <div className="text-[11px] text-slate-500 font-normal">Modern AI enterprise logo</div>
                </div>
              </div>

              {/* Option B: Custom Uploaded Logo */}
              <div
                onClick={() => {
                  if (customLogoData) {
                    handleSelectPreset('custom');
                  } else {
                    fileInputRef.current?.click();
                  }
                }}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                  activeLogoType === 'custom'
                    ? 'border-slate-900 bg-slate-50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {customLogoData ? 'Uploaded File' : 'Not Uploaded Yet'}
                    </span>
                    {activeLogoType === 'custom' && (
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                        <Check className="w-3 h-3 text-[#FAC400]" />
                      </span>
                    )}
                  </div>
                  <div className="h-10 flex items-center justify-center bg-white rounded-lg border border-slate-100 px-2 py-1 mb-2">
                    {customLogoData ? (
                      <img 
                        src={customLogoData} 
                        alt="Custom Logo Preview" 
                        className="max-h-7 max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-[11px] text-slate-400 font-mono italic">Upload image above</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="truncate mr-2">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {customLogoName || 'Custom Upload'}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal truncate">
                      {customLogoData ? 'Your uploaded file' : 'Click to upload'}
                    </div>
                  </div>
                  {customLogoData && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveCustomLogo();
                      }}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                      title="Delete uploaded logo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Option C: StatusNeo */}
              <div
                onClick={() => handleSelectPreset('statusneo')}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                  activeLogoType === 'statusneo'
                    ? 'border-slate-900 bg-slate-50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      Classic
                    </span>
                    {activeLogoType === 'statusneo' && (
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">
                        <Check className="w-3 h-3 text-[#FAC400]" />
                      </span>
                    )}
                  </div>
                  <div className="h-10 flex items-center justify-center bg-white rounded-lg border border-slate-100 px-2 py-1 mb-2">
                    <StatusNeoLogo forceType="statusneo" height={26} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">StatusNeo Classic</div>
                  <div className="text-[11px] text-slate-500 font-normal">Original wordmark</div>
                </div>
              </div>

            </div>
          </div>

          {/* 3. Live Preview & Size Adjuster */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-600" />
                <span>Logo Height &amp; Display Scale ({logoHeight}px)</span>
              </span>
              <button
                onClick={() => {
                  setLogoHeight(38);
                  localStorage.setItem('app_logo_height', '38');
                  window.dispatchEvent(new Event('brand-logo-updated'));
                }}
                className="text-[11px] font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Height</span>
              </button>
            </div>

            <input
              type="range"
              min="24"
              max="54"
              step="2"
              value={logoHeight}
              onChange={handleHeightChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FAC400]"
            />

            {/* Dual Environment Preview */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Light Mode Preview (Navbar) */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold mb-2">
                  Light Theme Preview (Navbar)
                </div>
                <div className="h-14 flex items-center justify-center border border-dashed border-slate-100 rounded-lg bg-white overflow-hidden px-2">
                  <StatusNeoLogo height={logoHeight} inverted={false} />
                </div>
              </div>

              {/* Dark Mode Preview (Footer) */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-2xs">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold mb-2">
                  Dark Theme Preview (Footer)
                </div>
                <div className="h-14 flex items-center justify-center border border-dashed border-slate-800 rounded-lg bg-slate-950 overflow-hidden px-2">
                  <StatusNeoLogo height={logoHeight} inverted={true} />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
          <button
            onClick={handleResetDefaults}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            Reset to Defaults
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo cursor-pointer shadow-sm"
            >
              Done &amp; Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
