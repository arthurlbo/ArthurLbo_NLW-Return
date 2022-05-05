import { useState } from 'react';

import { CloseButton } from '../CloseButton';

import bugImageUrl from '../../Assets/bug.svg';
import ideaImageUrl from '../../Assets/idea.svg';
import thoughtImageUrl from '../../Assets/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        },
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balao de pensamentos',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400 ">
                Feito por
                <a
                    className="underline underline-offset-2 "
                    href="https://github.com/arthurlbo"
                    target="_blank"
                >
                    {' '}
                    Arthur Carneiro Lobo
                </a>
            </footer>
        </div>
    );
}