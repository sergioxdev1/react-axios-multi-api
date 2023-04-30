import React from 'react';

export default function BlockBack() {
  {
    window.location.hash = 'no-back-button';
  }
  {
    window.location.hash = 'Again-No-back-button';
  }
  {
    window.onhashchange = function () {
    window.location.hash = 'no-back-button';
    };
    
  }
}
