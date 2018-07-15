import { NgModule } from '@angular/core';

import { SafeUrlPipe } from './safe-url.pipe';
import { InitialsPipe } from './initials.pipe';
import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
import { IsArrayPipe } from './is.array.pipe';
import { SanitizePipe } from './sanitize.pipe';

const NIT_PIPES = [
	SafeUrlPipe,
	SanitizePipe,
	InitialsPipe,
	ArrayJoinPipe, ArrayImpureJoinPipe,
	IsArrayPipe
];

@NgModule({
	declarations: NIT_PIPES,
	exports: NIT_PIPES,
})
export class NitPipesModule { }

export { SafeUrlPipe } from './safe-url.pipe';
export { SanitizePipe } from "./sanitize.pipe";
export { InitialsPipe } from './initials.pipe';
export { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
