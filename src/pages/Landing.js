import React from 'react';

import templateSwitchVideo from '../utils/video/templateSwitch.mp4';
import publishVideo from '../utils/video/publish.mp4';
import extendedBlockVideo from '../utils/video/extendedBlock.mp4';
import editPreviewVideo from '../utils/video/editPreview.mp4';

export default function Landing() {
  return (
    <>
      <div>
        <video src={editPreviewVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </div>
      <div>
        <video src={templateSwitchVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </div>
      <div>
        <video src={publishVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </div>
      <div>
        <video src={extendedBlockVideo} loop autoPlay muted>
          <track default kind="captions" srcLang="zh-tw" />
        </video>
      </div>
    </>
  );
}
