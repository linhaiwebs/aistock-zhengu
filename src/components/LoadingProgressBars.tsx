import { useEffect, useState } from 'react';

interface LoadingProgressBarsProps {
  isVisible: boolean;
}

export default function LoadingProgressBars({ isVisible }: LoadingProgressBarsProps) {
  const [stage1, setStage1] = useState(0);
  const [stage2, setStage2] = useState(0);
  const [stage3, setStage3] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setStage1(0);
      setStage2(0);
      setStage3(0);
      return;
    }

    const stage1Timer = setTimeout(() => {
      const interval1 = setInterval(() => {
        setStage1((prev) => {
          if (prev >= 100) {
            clearInterval(interval1);
            return 100;
          }
          return prev + 5;
        });
      }, 30);

      return () => clearInterval(interval1);
    }, 100);

    const stage2Timer = setTimeout(() => {
      const interval2 = setInterval(() => {
        setStage2((prev) => {
          if (prev >= 100) {
            clearInterval(interval2);
            return 100;
          }
          return prev + 4;
        });
      }, 35);

      return () => clearInterval(interval2);
    }, 600);

    const stage3Timer = setTimeout(() => {
      const interval3 = setInterval(() => {
        setStage3((prev) => {
          if (prev >= 100) {
            clearInterval(interval3);
            return 100;
          }
          return prev + 3;
        });
      }, 40);

      return () => clearInterval(interval3);
    }, 1200);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
    };
  }, [isVisible]);

  const stages = [
    { label: 'データ収集中', progress: stage1, color: '#10B981', glow: '#10B981' },
    { label: 'AI分析中', progress: stage2, color: '#F59E0B', glow: '#F59E0B' },
    { label: 'レポート生成中', progress: stage3, color: '#06B6D4', glow: '#06B6D4' },
  ];

  return (
    <div className="w-full space-y-4">
      {stages.map((stage, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">{stage.label}</span>
            <span className="text-xs text-gray-300">{Math.floor(stage.progress)}%</span>
          </div>
          <div
            className="relative w-full h-2 bg-gray-800/50 rounded-full overflow-hidden border"
            style={{
              borderColor: `${stage.color}40`,
            }}
          >
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 ease-out rounded-full"
              style={{
                width: `${stage.progress}%`,
                backgroundColor: stage.color,
                boxShadow: `0 0 15px ${stage.glow}90, 0 0 25px ${stage.glow}50`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
