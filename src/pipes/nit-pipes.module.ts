import { NgModule } from '@angular/core';

import { SafeUrlPipe } from './safe-url.pipe';
import { InitialsPipe } from './initials.pipe';
import { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';

const NIT_PIPES = [
	SafeUrlPipe,
	InitialsPipe,
	ArrayJoinPipe, ArrayImpureJoinPipe
]

@NgModule({
	declarations: NIT_PIPES,
	exports: NIT_PIPES,
})
export class NitPipesModule { }

export { SafeUrlPipe } from './safe-url.pipe';
export { InitialsPipe } from './initials.pipe';
export { ArrayJoinPipe, ArrayImpureJoinPipe } from './array.join.pipe';
