import { ArrowLeft, Building, MapPin, Calendar, Briefcase, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          トップページに戻る
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">会社概要</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">株式会社アドバンス</h2>
                <p className="text-lg text-gray-700 mb-2">Advance Co., Ltd.</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                      <p className="text-gray-700 leading-relaxed">
                        〒101-0032<br />
                        東京都千代田区岩本町2-8-2<br />
                        都ビジネスビル9階
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">設立</h3>
                      <p className="text-gray-700 text-lg">2012年10月</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">業種</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      デジタルマーケティング／広告戦略・運用／データ分析
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-gray-900">事業内容</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    中小企業向け広告戦略・デジタルマーケティングコンサルティング
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    企業のビジネス目標に合わせた最適なデジタルマーケティング戦略の立案から実行までをトータルサポート
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Google・Yahoo! JAPAN等を活用した検索広告・SNS広告運用
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    主要な広告プラットフォームを活用し、費用対効果の高い広告運用を実現
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    コンテンツマーケティング、インフルエンサーマーケティング
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    質の高いコンテンツ制作とインフルエンサーとの連携により、ブランド認知度向上と顧客獲得を支援
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    データ分析・広告効果測定（ROI分析・コンバージョン率向上）
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    詳細なデータ分析により広告効果を可視化し、継続的な改善提案を実施
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    マーケティングデータの可視化、報告書作成
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    複雑なマーケティングデータを分かりやすく可視化し、意思決定をサポートする報告書を作成
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-lg p-5 hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    デジタルトランスフォーメーション（DX）コンサルティング
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed ml-10">
                    企業のデジタル化を推進し、業務効率化とビジネス成長を実現するための戦略的コンサルティング
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">企業理念</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  株式会社アドバンスは、中小企業のデジタルマーケティングを支援することを使命としています。
                  データドリブンなアプローチにより、クライアント企業の成長を加速させ、
                  持続可能なビジネス発展に貢献します。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  最新のテクノロジーと豊富な実績に基づく専門知識を活かし、
                  お客様に最適なマーケティングソリューションを提供してまいります。
                </p>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">お問い合わせ</h3>
              <p className="text-sm text-gray-700 mb-4">
                弊社サービスに関するお問い合わせは、お気軽にご連絡ください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                お問い合わせフォームへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
