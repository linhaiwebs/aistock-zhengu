import { useState, useEffect } from 'react';
import { Save, CheckCircle, AlertCircle, Settings, Shield, TrendingUp } from 'lucide-react';
import { apiClient } from '../lib/apiClient';

interface SystemConfig {
  fallback_mode_enabled: boolean;
}

interface FallbackStats {
  total: number;
  last7Days: Array<{ date: string; count: number }>;
}

export default function SystemSettingsTab() {
  const [config, setConfig] = useState<SystemConfig>({
    fallback_mode_enabled: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [stats, setStats] = useState<FallbackStats | null>(null);

  useEffect(() => {
    loadConfig();
    loadStats();
  }, []);

  const loadConfig = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/api/google-tracking');
      const data = await response.json();
      if (data.success && data.config) {
        setConfig({
          fallback_mode_enabled: data.config.fallback_mode_enabled || false,
        });
      }
    } catch (error) {
      console.error('Failed to load system config:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const response = await apiClient.get('/api/admin/stats?days=7');
      const data = await response.json();
      if (data.fallbackStats) {
        setStats(data.fallbackStats);
      }
    } catch (error) {
      console.error('Failed to load fallback stats:', error);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(false);

    try {
      const response = await apiClient.get('/api/google-tracking');
      const existingData = await response.json();

      const updateData = {
        ...existingData.config,
        fallback_mode_enabled: config.fallback_mode_enabled,
      };

      const saveResponse = await apiClient.post('/api/google-tracking', updateData);
      const saveData = await saveResponse.json();

      if (saveData.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        loadStats();
      }
    } catch (error) {
      console.error('Failed to save system config:', error);
      alert('保存配置失败');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-300 border-t-slate-900"></div>
        <p className="mt-4 text-slate-600">加载系统设置...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">系统设置</h2>
        <p className="text-sm text-slate-600 mt-1">配置系统行为和兜底策略</p>
      </div>

      <div className={`rounded-xl shadow-sm border p-4 ${
        config.fallback_mode_enabled
          ? 'bg-blue-50 border-blue-200'
          : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            config.fallback_mode_enabled
              ? 'bg-blue-100'
              : 'bg-slate-100'
          }`}>
            <Shield className={`w-5 h-5 ${
              config.fallback_mode_enabled
                ? 'text-blue-600'
                : 'text-slate-600'
            }`} />
          </div>
          <div>
            <div className={`font-bold ${
              config.fallback_mode_enabled
                ? 'text-blue-900'
                : 'text-slate-900'
            }`}>
              兜底模式：{config.fallback_mode_enabled ? '已启用' : '未启用'}
            </div>
            <div className={`text-sm ${
              config.fallback_mode_enabled
                ? 'text-blue-700'
                : 'text-slate-600'
            }`}>
              {config.fallback_mode_enabled
                ? '无效代码输入时将引导用户添加 LINE'
                : '无效代码输入时诊断按钮保持禁用状态'
              }
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                兜底模式配置
              </div>
            </label>
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="fallback_mode_enabled"
                checked={config.fallback_mode_enabled}
                onChange={(e) => setConfig({ ...config, fallback_mode_enabled: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="fallback_mode_enabled" className="text-sm font-medium text-slate-700 cursor-pointer">
                启用兜底模式
              </label>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              启用后，用户输入无效的股票代码时，仍可点击诊断按钮并获得 LINE 引导消息
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-900">
                <p className="font-semibold mb-2">功能说明：</p>
                <ul className="list-disc list-inside space-y-1 text-amber-800">
                  <li>正常情况：用户输入有效代码，获得完整 AI 诊断</li>
                  <li>兜底模式关闭：用户输入无效代码，按钮禁用，无法继续</li>
                  <li>兜底模式开启：用户输入无效代码，仍可点击，引导添加 LINE</li>
                  <li>目的：确保转化漏斗不中断，提高 LINE 添加转化率</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-700 mb-2">兜底提示词预览：</p>
            <div className="bg-white rounded-lg p-4 border border-slate-300 text-sm text-slate-800 whitespace-pre-line">
              {`ご入力いただいた「[用户输入]」について確認いたしました。

私たちのスタッフ、「AI 株式 アシスタント」のLINEアカウントを追加してください。

追加が完了しましたら、詳細な診断レポートを受け取るために、銘柄コード「[用户输入]」と送信してください。
メッセージを送信した瞬間にAI診断が始まり、最新レポートが即座に届きます。`}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              [用户输入] 会被替换为用户实际输入的内容
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white rounded-lg font-medium transition"
        >
          {saving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              保存中...
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              保存配置
            </>
          )}
        </button>

        {saveSuccess && (
          <div className="flex items-center gap-2 text-green-600 font-medium">
            <CheckCircle className="w-5 h-5" />
            配置保存成功！
          </div>
        )}
      </div>

      {stats && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-slate-700" />
            <h3 className="font-bold text-slate-900">兜底模式使用统计</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-blue-600 font-medium">总使用次数</div>
                <div className="text-3xl font-bold text-blue-900 mt-1">{stats.total}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-green-600 font-medium">最近 7 天</div>
                <div className="text-3xl font-bold text-green-900 mt-1">
                  {stats.last7Days.reduce((sum, day) => sum + day.count, 0)}
                </div>
              </div>
            </div>
            {stats.last7Days.length > 0 && (
              <div>
                <div className="text-sm font-medium text-slate-700 mb-2">每日使用趋势</div>
                <div className="space-y-1">
                  {stats.last7Days.map((day) => (
                    <div key={day.date} className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 w-24">{day.date}</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="bg-blue-500 h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.max(5, (day.count / Math.max(...stats.last7Days.map(d => d.count))) * 100)}%`
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700 w-12 text-right">{day.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
        <h3 className="font-bold text-slate-900 mb-4">当前配置</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-slate-600 w-32 flex-shrink-0">兜底模式:</span>
            <span className={`font-semibold ${config.fallback_mode_enabled ? 'text-blue-600' : 'text-slate-600'}`}>
              {config.fallback_mode_enabled ? '已启用' : '未启用'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
