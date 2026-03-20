import { Copy } from 'lucide-react'

export function CodeTerminal() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden shadow-2xl">
      <div className="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          </div>
          <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">
            inference_request.py
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[10px] font-mono text-primary flex items-center gap-1 cursor-pointer hover:text-primary/80 transition-colors">
            <Copy className="w-3 h-3" /> Copy
          </button>
        </div>
      </div>

      <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
        <pre className="text-[#c2c7cc]">
          <code>
            <span className="text-secondary">import</span> neural_os{'\n'}
            {'\n'}
            <span className="text-on-surface-variant"># Initialize the intelligent client</span>
            {'\n'}
            client = neural_os.Client(api_key=
            <span className="text-tertiary">"nos_live_9x2p..."</span>){'\n'}
            {'\n'}
            <span className="text-on-surface-variant"># Execute low-latency neural inference</span>
            {'\n'}
            response = client.inference.create({'\n'}
            {'    '}
            model=
            <span className="text-tertiary">"neural-4-turbo"</span>,{'\n'}
            {'    '}
            messages=[{'{'}
            {'\n'}
            {'        '}
            <span className="text-primary">"role"</span>:{' '}
            <span className="text-tertiary">"system"</span>,{'\n'}
            {'        '}
            <span className="text-primary">"content"</span>:{' '}
            <span className="text-tertiary">"Process tactical data."</span>
            {'\n'}
            {'    '}
            {'}'}],{'\n'}
            {'    '}
            stream=
            <span className="text-secondary">True</span>
            {'\n'}){'\n'}
            {'\n'}
            <span className="text-secondary">for</span> chunk{' '}
            <span className="text-secondary">in</span> response:{'\n'}
            {'    '}
            <span className="text-secondary">print</span>(chunk.delta.content, end=
            <span className="text-tertiary">""</span>)
          </code>
        </pre>
      </div>
    </div>
  )
}
