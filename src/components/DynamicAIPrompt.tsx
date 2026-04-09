import { Hand } from 'lucide-react';

interface DynamicAIPromptProps {
  stockName?: string;
  stockCode?: string;
  onStockNameClick?: () => void;
}

export default function DynamicAIPrompt({ stockName, stockCode, onStockNameClick }: DynamicAIPromptProps) {
  return (
    <div className="relative mt-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-2xl border-2 border-blue-300">
        {stockName ? (
          <p className="text-sm md:text-lg text-gray-800 text-center leading-relaxed">
            お客様が照会したい可能性のある銘柄を検出しました{' '}
            <span className="relative inline-block">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10" style={{ animationDuration: '1.5s' }}>
                <Hand className="w-10 h-10 text-yellow-400 drop-shadow-2xl rotate-12" />
              </div>
              <span
                onClick={onStockNameClick}
                className="font-bold text-2xl text-blue-600 bg-yellow-200 px-2 py-1 rounded inline-block cursor-pointer hover:bg-yellow-300 transition-colors text-base"
              >
                {stockName}
              </span>
            </span>{' '}
            の指標とデータ及びトレンド、AIが準備完了でサービスを提供し、数秒で完全な結果が得られます
          </p>
        ) : (
          <p className="text-sm md:text-lg text-gray-800 text-center leading-relaxed">
            株式コードを入力すると、AIが株式の指標、データ、トレンドを分析し、数秒で完全な結果が得られます
          </p>
        )}
      </div>
    </div>
  );
}
