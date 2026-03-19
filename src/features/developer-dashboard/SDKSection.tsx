export function SDKSection() {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant/5 rounded-xl p-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Native SDKs</h3>
          <p className="text-on-surface-variant text-sm">
            High-performance libraries for your preferred stack.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Python SDK */}
          <button className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
            <svg
              className="w-5 h-5 opacity-70 brightness-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 5.373 2.5 5.373 2.5v2.5h6.25v.833H3.207S0 5.417 0 12.083c0 6.667 2.792 6.25 2.792 6.25h1.666v-3.042c0-3.646 3.104-3.583 3.104-3.583h2.084v-5.5c0-3.646-3.104-3.583-3.104-3.583H4.958V5.042C4.958 2.5 7.583 2.5 7.583 2.5h4.417V0H12zm-3.646 1.667a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666z" />
              <path d="M12 24c6.627 0 6.627-2.5 6.627-2.5v-2.5h-6.25v-.833h8.416s3.208.417 3.208-6.25c0-6.667-2.792-6.25-2.792-6.25h-1.666v3.042c0 3.646-3.104 3.583-3.104 3.583h-2.084v5.5c0 3.646 3.104 3.583 3.104 3.583h1.584v-2.417c0-2.542-2.625-2.542-2.625-2.542h-4.417V24H12zm3.646-1.667a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666z" />
            </svg>
            <span className="text-xs font-bold font-mono">pip install neural-os</span>
          </button>

          {/* JavaScript SDK */}
          <button className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
            <svg
              className="w-5 h-5 opacity-70 brightness-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.979 0C5.618 0 .447 5.171.447 11.532c0 5.097 3.31 9.415 7.896 10.94.584.108.798-.253.798-.562 0-.278-.01-1.015-.016-1.991-3.227.7-3.907-1.552-3.907-1.552-.529-1.345-1.29-1.703-1.29-1.703-1.054-.722.08-.708.08-.708 1.166.082 1.78 1.197 1.78 1.197 1.036 1.776 2.716 1.263 3.375.965.105-.751.405-1.263.737-1.553-2.578-.293-5.288-1.289-5.288-5.739 0-1.269.454-2.309 1.197-3.12-.12-.293-.518-1.475.113-3.072 0 0 .977-.313 3.201 1.193.928-.258 1.924-.387 2.916-.392.99.005 1.985.134 2.916.392 2.222-1.506 3.198-1.193 3.198-1.193.633 1.597.235 2.779.116 3.072.745.811 1.195 1.851 1.195 3.12 0 4.461-2.715 5.442-5.301 5.731.417.36.79 1.067.79 2.15 0 1.553-.014 2.803-.014 3.186 0 .311.211.675.802.56 4.582-1.527 7.889-5.843 7.889-10.938C23.511 5.171 18.341 0 11.979 0" />
            </svg>
            <span className="text-xs font-bold font-mono">npm i @neural-os/sdk</span>
          </button>

          {/* Go SDK */}
          <button className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container-high transition-colors">
            <svg
              className="w-5 h-5 opacity-70 brightness-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.707 11.276v6.19h3.314v-.128c.29.086.665.15 1.118.193.453.043.917.064 1.391.064.643 0 1.244-.085 1.802-.257a3.69 3.69 0 0 0 1.434-.803c.41-.385.734-.874.97-1.466.236-.592.354-1.287.354-2.085 0-.734-.107-1.39-.321-1.97a4.26 4.26 0 0 0-.938-1.513 3.83 3.83 0 0 0-1.466-.938c-.57-.214-1.205-.321-1.905-.321-.734 0-1.39.107-1.97.321a3.69 3.69 0 0 0-1.434.803V11.276H1.707zm3.314 1.161h1.627c.342 0 .653.043.933.128.28.086.517.214.71.385.193.172.342.385.45.642.107.257.16.557.16.899 0 .321-.053.603-.16.846a1.58 1.58 0 0 1-.45.62 1.83 1.83 0 0 1-.71.364c-.28.086-.59.129-.933.129H5.02v-3.013zm8.053-3.685c-.643 0-1.226.086-1.75.257a3.69 3.69 0 0 0-1.34.803 3.44 3.44 0 0 0-.857 1.34c-.193.536-.29 1.151-.29 1.846v4.468h3.314v-4.053c0-.45.086-.814.257-1.092a.96.96 0 0 1 .857-.45c.214 0 .407.033.578.1.172.067.314.164.428.292.114.129.2.286.268.471.067.186.1.393.1.621v4.11h3.314v-6.19h-3.185v.557c-.257-.343-.593-.607-1.007-.792a3.62 3.62 0 0 0-1.487-.288zm7.44 0c-.643 0-1.226.086-1.75.257a3.69 3.69 0 0 0-1.34.803 3.44 3.44 0 0 0-.857 1.34c-.193.536-.29 1.151-.29 1.846v4.468h3.314v-4.053c0-.45.086-.814.257-1.092a.96.96 0 0 1 .857-.45c.214 0 .407.033.578.1.172.067.314.164.428.292.114.129.2.286.268.471.067.186.1.393.1.621v4.11h3.314v-6.19h-3.185v.557c-.257-.343-.593-.607-1.007-.792a3.62 3.62 0 0 0-1.487-.288z" />
            </svg>
            <span className="text-xs font-bold font-mono">go get neural-os/v2</span>
          </button>
        </div>
      </div>
    </section>
  )
}
