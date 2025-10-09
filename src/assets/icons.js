import { library, dom } from '@fortawesome/fontawesome-svg-core';

// Import solid icons (free)
import {
	faPlay,
	faPause,
	faPlug,
	faExpand,
	faUsers,
	faSync,
	faArrowRight,
	faArrowLeft,
	faFilm,
	faRedo,
	faTrashArrowUp,
	faFont,
	faImages,
	faImage,
	faMaximize
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
	faPlay,
	faPause,
	faPlug,
	faExpand,
	faUsers,
	faSync,
	faArrowRight,
	faArrowLeft,
	faFilm,          // Alternative for fa-popcorn (Pro only)
	faRedo,
	faTrashArrowUp,  // Alternative for fa-trash-undo-alt
	faFont,          // Alternative for fa-font-case (Pro only)
	faImages,
	faImage,
	faMaximize       // Alternative for fa-arrows-alt in v6
);

// Watch the DOM and replace <i> tags with <svg>
dom.watch();
