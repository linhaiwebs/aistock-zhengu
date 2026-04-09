import AIBrainAnimation from './AIBrainAnimation';
import DataFlowAnimation from './DataFlowAnimation';
import DataParticleSystem from './DataParticleSystem';
import LoadingProgressBars from './LoadingProgressBars';

interface InlineLoadingSceneProps {
  isVisible: boolean;
}

export default function InlineLoadingScene({ isVisible }: InlineLoadingSceneProps) {
  if (!isVisible) return null;

  return (
    <div className="w-full animate-fadeIn relative">
      <DataParticleSystem />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            AI正在分析報告
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            数秒お待ちください...
          </p>
        </div>

        <div className="flex items-end justify-center gap-8 mb-8">
          <AIBrainAnimation />
          <DataFlowAnimation />
        </div>

        <div className="max-w-md mx-auto">
          <LoadingProgressBars isVisible={isVisible} />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-300 leading-relaxed">
            すべてのデータは公開されている市場情報を使用しており、
            <br className="hidden sm:inline" />
            公開市場データに基づいて分析を行っています
          </p>
        </div>
      </div>
    </div>
  );
}
