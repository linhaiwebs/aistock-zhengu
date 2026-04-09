import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t-2 border-white/20 mt-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Legal Disclosure Section - Desktop */}
        <div className="hidden md:block bg-slate-800/90 backdrop-blur-sm border-2 border-cyan-500/50 rounded-lg p-4 mb-4 shadow-xl">
          <div className="flex items-start gap-2">
            <div className="bg-cyan-900/50 p-2 rounded-lg flex-shrink-0">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-cyan-300 mb-2 flex items-center gap-1">
                <Scale className="w-4 h-4" />
                金融商品取引法に基づく重要事項
              </h3>

              <div className="space-y-2 text-sm leading-relaxed text-slate-200">
                <div className="bg-slate-700/70 rounded p-2 border-l-4 border-cyan-500">
                  <p className="font-bold text-cyan-300 mb-1">【サービスの性質】</p>
                  <p>
                    本サービスは、AI技術を活用した株式情報の提供および分析ツールです。
                    <strong className="text-red-700">投資助言業務、投資一任業務、金融商品仲介業務には該当せず、特定の金融商品の売買を推奨・勧誘するものではありません。</strong>
                  </p>
                </div>

                <div className="bg-slate-700/70 rounded p-2 border-l-4 border-orange-500">
                  <p className="font-bold text-orange-300 mb-1">【投資リスクに関する警告】</p>
                  <p>
                    株式投資には価格変動リスク、信用リスク、流動性リスク等が伴い、
                    <strong className="text-red-700">投資元本を割り込む可能性があります。</strong>
                    過去の運用実績は将来の運用成果を保証するものではありません。
                    市場環境の変化により、予想外の損失が発生する可能性があります。
                  </p>
                </div>

                <div className="bg-slate-700/70 rounded p-2 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-300 mb-1">【情報の正確性について】</p>
                  <p>
                    提供される情報は、信頼できると判断した情報源から取得していますが、
                    その正確性、完全性、適時性を保証するものではありません。
                    AI分析結果は参考情報として提供されるものであり、絶対的な投資判断基準ではありません。
                  </p>
                </div>

                <div className="bg-slate-700/70 rounded p-2 border-l-4 border-slate-400">
                  <p className="font-bold text-slate-300 mb-1">【投資判断の責任】</p>
                  <p>
                    <strong className="text-red-700">最終的な投資判断は、利用者ご自身の責任において行ってください。</strong>
                    本サービスの利用により生じたいかなる損害についても、当社は一切の責任を負いません。
                    投資を行う際は、証券会社等の金融商品取引業者にご相談ください。
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded p-2 mt-2">
                  <p className="font-bold text-slate-200 mb-1">【登録情報】</p>
                  <p className="text-xs text-slate-300">
                    当サービス提供者は金融商品取引業者（投資助言・代理業、投資運用業等）ではありません。
                    金融商品取引法第29条の登録を受けた事業者ではないため、個別の投資助言を行うことはできません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice - Mobile */}
        <div className="md:hidden bg-cyan-500/10 backdrop-blur-md border border-cyan-400/50 rounded-xl p-3 text-center mb-3">
          <p className="text-sm text-cyan-300 font-semibold mb-1">⚠️ 重要なお知らせ</p>
          <p className="text-xs text-cyan-100 leading-relaxed">
            当サービスは情報提供のみを目的としており、投資助言や投資勧誘を行うものではありません。投資判断は必ずご自身の責任で行ってください。
          </p>
        </div>

        {/* Footer Links Section */}
        <div className="border-t-2 border-cyan-400/40 pt-3">
          <div className="grid grid-cols-2 gap-4 mb-3">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-1 text-sm">
                <FileText className="w-4 h-4 text-cyan-600" />
                法的文書
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/company"
                    className="text-slate-700 hover:text-cyan-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    会社概要 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-slate-700 hover:text-cyan-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    利用規約 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-slate-700 hover:text-cyan-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    プライバシーポリシー <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="text-slate-700 hover:text-cyan-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    特定商取引法表記 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-1 text-sm">
                <Mail className="w-4 h-4 text-cyan-600" />
                お問い合わせ
              </h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-700 hover:text-cyan-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    お問い合わせフォーム <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-center gap-1 text-slate-700 font-medium">
                  <Mail className="w-3 h-3 text-cyan-600" />
                  <span>support@jptjn.com</span>
                </li>
                <li className="text-slate-600 text-xs">
                  受付時間: 24時間受付（返信は営業日内）
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-cyan-400/40 pt-2 text-center">
            <p className="text-xs sm:text-sm text-slate-800 mb-1 font-semibold">
              &copy; {currentYear} 株式会社アドバンス (Advance Co., Ltd.). All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed max-w-3xl mx-auto mb-2">
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
