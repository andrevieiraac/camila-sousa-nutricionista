import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function InstagramVideo() {
  useEffect(() => {
    // Process or load the public Instagram embed script dynamically to hydrate the media blockquote
    try {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.instagram.com/embed.js';
        script.onload = () => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      }
    } catch (err) {
      console.warn('Loading of Instagram SDK failed gracefully:', err);
    }
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center justify-center w-full">
      
      {/* Video embed widget container - Simple and perfectly centered with absolute minimum noise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="w-full max-w-[360px] rounded-[2rem] bg-gradient-to-b from-brand-gold via-brand-accent to-brand-gold p-[3px] shadow-lg hover:shadow-brand-gold/15 hover:shadow-xl transition-all duration-300">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-brand-bg flex justify-center items-center min-h-[460px] p-2">
            
            {/* Embed blockquote without 'data-instgrm-captioned' to hide captions and keep it minimal */}
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DR0OHWQEnEY/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14" 
              style={{ 
                background: '#F6E9DF', 
                border: '0', 
                borderRadius: '16px', 
                boxShadow: 'none', 
                margin: '0', 
                maxWidth: '100%', 
                minWidth: '280px', 
                padding: '0', 
                width: '100%',
                fontFamily: 'sans-serif'
              }}
            >
              <div style={{ padding: '16px' }}> 
                <a 
                  href="https://www.instagram.com/reel/DR0OHWQEnEY/?utm_source=ig_embed&amp;utm_campaign=loading" 
                  style={{ background: '#F6E9DF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%', display: 'block' }} 
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}> 
                    <div style={{ backgroundColor: '#F0DDCD', borderRadius: '50%', flexGrow: 0, height: '32px', marginRight: '10px', width: '32px' }}></div> 
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'flex-start' }}> 
                      <div style={{ backgroundColor: '#F0DDCD', borderRadius: '4px', flexGrow: 0, height: '12px', marginBottom: '4px', width: '80px' }}></div> 
                      <div style={{ backgroundColor: '#F0DDCD', borderRadius: '4px', flexGrow: 0, height: '12px', width: '40px' }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '15% 0' }}></div> 
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 8px' }}>
                    <Play className="w-8 h-8 text-brand-btn hover:text-brand-accent transition-colors" />
                  </div>
                  <div style={{ paddingTop: '4px' }}> 
                    <div style={{ color: '#7C482C', fontFamily: 'Arial,sans-serif', fontSize: '12px', fontStyle: 'normal', fontWeight: '500', lineHeight: '16px' }}>
                      Carregando vídeo...
                    </div>
                  </div>
                  <div style={{ padding: '10% 0' }}></div>
                </a>
              </div>
            </blockquote>

          </div>
        </div>
      </motion.div>

    </div>
  );
}
