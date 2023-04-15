import React from 'react';
import React, { useEffect, useState } from 'react';

export default function dogApi() {
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
